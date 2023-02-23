import React, { useState } from "react";

export default function SelectTag() {
  const [age, setAge] = useState("0-18");

  return (
    <div>
      <form>
        <fieldset>
          <legend></legend>
          <label htmlFor="age-select"> How old are you?</label>
          <br />
          <select id="age-select" value={age} onChange={ (event)=>{ setAge(event.target.value)}}>
            <option value="0-18"> 18 and under</option>
            <option value="19-39"> 19 to 39</option>
            <option value="40-64"> 40 to 64</option>
            <option value="65-infinity"> 65 and above</option>
          </select>
        </fieldset>
      </form>
        <br />
      <p>
        <strong>Selected Age: </strong>
        {age}
        
      </p>
    </div>
  );

  /*  const [country, setCountry] = useState('India');
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Select your Country</legend>
                    <select name="country-name" value={country} onChange={ (event)=>{ setCountry(event.target.value)}}>
                        <option value="India" selected>India</option>
                        <option value="Australia">Australia</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </fieldset>
            </form>
        </div>
    ); */
}
