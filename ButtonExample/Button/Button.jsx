import './Button.css'
import { useState } from 'react'

function Button(){

    let changename = () =>{
    const name = document.getElementById('yourname').value
        document.getElementById('name1').textContent = name
    }
    
    return(
        <>
        <button onClick={() => changename()}>Change The Name</button>
        </>
    )
}

export default Button