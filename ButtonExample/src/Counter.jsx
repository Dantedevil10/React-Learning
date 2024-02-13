import { useState } from "react"

function Counter(){
    const [count , setCount] = useState(0)

    function Increase(){
        setCount(count => count + 1)
    }

    function Decrease (){
        setCount(c => c - 1)
    }

    function Reset(){
        setCount(c => c = 0)
    }
    return(
        <>
        <p style={{fontSize:"2rem",fontFamily:"arial",textAlign:"center"}}>{count}</p>
        <button onClick={Increase}>Increse</button>
        <button onClick={Decrease}>Decrese</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}

export default Counter