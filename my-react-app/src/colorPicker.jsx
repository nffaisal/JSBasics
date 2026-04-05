import React, {useState} from'react';
function colorPicker(){
    const [color,setcolor] =useState("#ffffff");
    function handleColorChange(event){
        setcolor(event.target.value);
    }
    return(
        <div className="color-picker-container">
            <h1>color Picker</h1>
            <div className="color=display" style={{backgroundColor:color}}>
                <p> Selected Color: {color}</p>

            </div>
            <label> Select a color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )

}
export default colorPicker