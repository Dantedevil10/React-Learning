import { useState } from "react"

function Mycomponent(){

    const [foods,setFoods] = useState(['Orange','Apple','Banana'])

    function handleAddFood(){
       const newFood = document.getElementById('foodinput').value
       document.getElementById('foodinput').value = ''
        setFoods(f => [...f,newFood])
    }
    function handleRemoveFood(index){
       setFoods(foods.filter((_ , i) => i !== index)) // o _ pode ser usado quando o elemento NÃO está sendo
                                                     //usado, e ja q não esta sendo usado o _ faz com q o 
                                                     //elemento seja ignorado
    }

    return(
        <>
        <div>
            <h1>List of Foods</h1>
            <ul>
                {foods.map((food,index) => <li onClick={() => handleRemoveFood(index)} key={index}>{food}
                </li>)}
            </ul>
            <input type="text"  id="foodinput" placeholder="Enter Food Name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
        </>
    )
}

export default Mycomponent