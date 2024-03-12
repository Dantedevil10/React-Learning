//useEffect() = React hook ,ele fala pro react FAÇA ESSE CODIGO QUANDO (pick one)
//      esse componente re-renderiza
//      esse componente monta
//      o estado de um valor

//useEffect(função, [dependencias])

// 1. useEffect(() => {})       //roda depois de cada re-render
// 1. useEffect(() => {}, [])   //roda somente on mount
// 1. useEffect(() => {}, [valor])  //execute apenas em mount + quando o valor mudar

import { useState,useEffect } from "react"

function Mycomponent(){

    const [count,setCount] = useState(0)
    const [color,setColor] = useState('green')

    useEffect(() => {
        document.title = `count: ${count} ${color}`
        },[count,color])          //sem esse [count] o codigo funciona normalmente ,mas quando eu adiciono os []
                            //eu to dizendo ,So renderize quando esse valor (count) der update  

    function addcount(){
        setCount(c => c + 1)
    }

    function removecount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return(<>
    <p style={{color:color}}>count: {count}</p>
    <button onClick={addcount}>Add</button>
    <button onClick={removecount}>Remove</button><br />
    <button onClick={changeColor}>Change color</button>
    
    </>)
}

export default Mycomponent