import { useState } from "react";

function Mycomponent(){

    const [car,setCar] = useState({year:2024,make:'Ford',model:'Mustang'})

    function handleTheYear(event){
        setCar(c => ({...c ,year: event.target.value}))
    }
    function handleTheMake(event){
        setCar(c => ({...c ,make: event.target.value}))
    }
    function handleTheModel(event){
        setCar(c => ({...c ,model: event.target.value}))
    }

    return(<>
        <div>
            <p>Your Favoriute Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleTheYear}/>
            <input type="text" value={car.make}  onChange={handleTheMake}/>
            <input type="text" value={car.model}  onChange={handleTheModel}/>
        </div>
    </>)
}

export default Mycomponent