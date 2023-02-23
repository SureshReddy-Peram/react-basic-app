import React, { useState } from "react";

export default function Test1(){

    const [name, setName] = useState('suresh');

    const handleChange = (e)=>{
        setName(e.target.value);
    }

   const handleSubmit = (e)=>{
        e.preventDefault();
        setName("");
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
           
           <p>
            <strong>Current value: </strong>
            {name || "(empty)"}
           </p>

        </div>
    );
}       