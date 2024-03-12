import { useState } from "react"

function Mycomponent(){

    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carMake,setCarMake] = useState("")
    const [carModel,setCarModel] = useState("")

    function AddaCar(){
        const newCar = {year:carYear,
                        make:carMake,
                        model:carModel}

        setCars(c => [...c,newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")

    }
    function RemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index))
    }
    function handleTheYear(event){
        setCarYear(event.target.value)
    }
    function handleTheMake(event){
        setCarMake(event.target.value)
    }
    function handleTheModel(event){
        setCarModel(event.target.value)
    }

    return(<>
        <div>
            <h1>List of Your Cars</h1>
            <ul>
                {cars.map((car,index) => <li key={index} onClick={() => RemoveCar(index)} >
                     {car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" onChange={handleTheYear} value={carYear}/><br />
            <input type="text" onChange={handleTheMake} value={carMake} placeholder="Enter The Make"/><br />
            <input type="text" onChange={handleTheModel} value={carModel} placeholder="Enter The Model"/><br />
            <button onClick={AddaCar}>Add New Car</button>
        </div>
    </>)
}

export default Mycomponent