import React, { useState } from "react";

export default function MulRadioButton() {
  const [language, setLanguage] = useState("");

  const VALID_LANGUAGES = ['English', 'Spanish', 'Portugese', 'Arabic', 'Telugu'];

  return (
    <div>
      <form>
        <fieldset>
          <legend>Select language</legend>

          {VALID_LANGUAGES.map( (option)=> (
            <div key={option}>
             <input
            type="radio"
            name="current-language"
            value={option}
            checked={option === language}
            onChange={(event) => {
              setLanguage(event.target.value);
            }}
          />
          <label htmlFor={option} > {option}</label>
            </div>
          ))}
        </fieldset>
      </form>

      <p>
        <strong>Selected language: </strong>
        {language || "undefined"}
      </p>
    </div>
  );
}
