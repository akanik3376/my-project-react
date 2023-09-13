import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Cart from '../Cart/Cart';


const Home = () => {

    // get all data
    const [allAcctors, setallAcctors] = useState([])
    const [AddActor, setAddActor] = useState([])
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const Budget = 30000;

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setallAcctors(data))

    })

    // handel btn 

    const handleAddActor = (actor) => {
        const { name } = actor
        // console.log(name)
        // console.log(actor)
        const isExist = AddActor.find((item) => item.id == actor.id)
        let count = actor.salary;
        // console.log(count)
        if (isExist) {
            return alert(`you have already selected  

            ${name}`)
        } else {
            const newAddActor = [...AddActor, actor]
            setAddActor(newAddActor)
            AddActor.forEach(item => {
                count = count + item.salary

            })
            // console.log(count)

            let sum = Budget - count;

            // console.log(sum)
            if (sum < 0) {
                return alert('You don`t have available money')
            } else {
                setTotalCost(count)
                setRemaining(sum)
            }

        }


    }

    // console.log(AddActor)
    return (
        <div className='text-white container  mx-auto flex flex-col-reverse md:flex-row justify-between '>
            <div className="card-container grid grid-cols-1 w-60 mx-auto  md:grid-cols-2  md:w-2/3">
                {
                    allAcctors.map(actor =>
                        <div key={actor.id} className="card  md:w-60 border-2 my-4 border-gray-300 text-center ">
                            <div className="card-img my-2 flex justify-center">
                                <img className="w-24 rounded-full" src={actor?.image} alt="" />
                            </div>
                            <h2>{actor?.name}</h2>
                            <p>
                                <small>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                                </small>
                            </p>
                            <div className="flex justify-around my-2">
                                <p>salary:{actor?.salary} $</p>
                                <p>{actor?.role}</p>
                            </div>
                            <button
                                onClick={() => handleAddActor(actor)}
                                className="bg-violet-800 w-20 rounded p-2 my-2"
                            >
                                Select
                            </button>
                        </div>
                    )
                }
            </div>

            <div className="cart w-3/4 mx-auto md:w-1/5 border border-white">
                <Cart AddActor={AddActor}
                    totalCost={totalCost}
                    remaining={remaining}
                    Budget={Budget}
                >

                </Cart>
            </div>

        </div>
    );
};

export default Home;