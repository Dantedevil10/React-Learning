import {useState} from "react";

function Colorpicker(){

    const [color,setColor] = useState('#FFFFFF')

    function handleTheColor(event){
        setColor(event.target.value)
    }

    return(<>
        <div className="div-color">
            <h1 className="title">Pick a Color</h1>
            <p className="show-color" style={{backgroundColor:color}}>Color Selected:{color}</p><br />
            <input type="color" id="color-select" value={color} onChange={handleTheColor}/>
        </div>
    
        </>)
}

export default Colorpicker