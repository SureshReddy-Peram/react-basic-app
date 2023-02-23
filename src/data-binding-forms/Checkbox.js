import React, { useState } from "react";

export default function Checkbox() {
  const [optIn, setOptIn] = useState(false);

  return (
    <div>
      <form>
        <fieldset>
          <legend>Select the Option</legend>
          <input
            type="checkbox"
            id="opt"
            checked={optIn}
            onChange={(event) => {
              setOptIn(event.target.checked);
            }}
          />

          <label htmlFor="opt" >
            <strong>Yes,</strong> I would like to join the news letter.
          </label>
        </fieldset>
      </form>

      <p>
        <strong>Opt in:  </strong> {optIn.toString()}
      </p>
    </div>
  );
}
