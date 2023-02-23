import React, { useState } from "react";

const OPTIONS = [ {label:"18 and Under", value: "0-18" },
                  {label:"19 to 39", value:"19-39"},
                  {label:"40 to 64", value:"40-64"}, 
                  {label:"64 and above", value:"64-infinity"}];

export default function SelectTag2(){

    //Grab the first option from the array, set its value into state
    const [age, setAge] = useState(OPTIONS[0].value);

    return (
        <>
            <form>
             <label htmlFor="age-select">
                How old are you?
             </label>
             <br/>
            <select id="age-select" value={age} onChange={(event)=> setAge(event.target.value)} >
                    
                 {/* Iterate over that array, to create the <option> tags dynamically.  */}   
                 {OPTIONS.map( option =>(
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                 ))}
            </select> 
            </form> 

            <p>
                <strong>Selected Value: </strong>
                    {age}
            </p>    
        </>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


