import React, {useState} from 'react';
function MyComponent(){
    /*  const [name,setName] =useState("Guest");
    const updateName= () => {
        setName("Noor")   }
     return(
        <div>
            <p> Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
     ) */
    const [name,setName ] =useState("");
    const [age,setAge]=useState(0);
    const [error,setError] =useState("");
    const incrementAge= () => { if(age<100){setAge(age+ 1);
        setError("");
    }else{
        setError("Age cannot exceed 100!");
    }}

    return(
        <div>
            <input onChange={ (e) => setName(e.target.value)}/>
            <p>Name: {name}</p>
            <p> Age: {age}</p>
            <button onClick={incrementAge}> Increment Age </button>
        </div>
    )
}
export default MyComponent