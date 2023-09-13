
const Cart = ({ AddActor, Budget, totalCost, remaining }) => {
    // console.log(AddActor)

    // console.log(name)

    return (
        <div>
            <div className="">

                <h2 className="p-2">Total Selected Actor:{AddActor.length}</h2>
                <h1 className="text-2xl p-2">Budget: ${Budget}</h1>
                <h1 className=" p-2 text-2xl my-3">Remaining: ${remaining}</h1>

                <h1 className="text-2xl p-2">Total Cost: ${totalCost}</h1>
                {
                    AddActor.map((actor) => (
                        <li className="p-2" key={actor.id}>{actor.name}</li>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;