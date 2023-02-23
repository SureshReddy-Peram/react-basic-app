import React, { useState } from "react";

export default function RadioButton() {
  
    const [hasAgreed, setHasAgreed] = useState("");
    
  return (
    <div>
      <form>
        <fieldset>
            <legend>Do you agree?</legend>
            <input
          type="radio"
          name="agreed-to-terms"
          id="agree-yes"
          value="yes"
          checked={hasAgreed === "yes"}
          onChange={(event) => setHasAgreed(event.target.value)}
        />
        <label htmlFor="agree-yes">Yes</label>

        <br/>
        <input
          type="radio"
          name="agreed-to-terms"
          id="agree-no"
          value="no"
          checked={hasAgreed === "no"}
          onChange={(event) => setHasAgreed(event.target.value)}
        />
        <label htmlFor="agree-no">No</label>
        </fieldset>      
      </form>

      <p>
        <strong> Has agreed:</strong>
        {hasAgreed || "undefined"}
      </p>
    </div>
  );
}
