import React, { useState } from "react";

const initialToppings = {
  tomatoes: false,
  cheese: false,
  mozzarella: false,
  chicken: false,
};

export default function MulCheckbox() {
  const [pizzaToppings, setPizzaToppings] = useState(initialToppings);

  //Get a list of all toppings, ['tomatoes', 'cheese', 'mozzarella', 'chicken']
  const toppingsList = Object.keys(initialToppings);

  return (
    <div>
      <form>
        <fieldset>
          <legend>Choose Toppings</legend>

          {/* Iterate over those toppings, and create a checkbox for each one */}
          {toppingsList.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id="option"
                checked={pizzaToppings[option] === true}
                onChange={(event) => {
                  setPizzaToppings({
                    ...pizzaToppings,
                    [option]: event.target.checked,
                  });
                }}
              />
              <label htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </fieldset>
      </form>

      <p>
        <strong>Stored state: </strong>
      </p>
      <p className="output">
        {/* {console.log( JSON.stringify(pizzaToppings, null, 2)) } */}
        { console.log( JSON.stringify(pizzaToppings, ['cheese', 'chicken'], 2))}
       {/*  const pizza = JSON.stringify(pizzaToppings);
        const newPizzaObject = JSON.parse(pizza);
         console.log(newPizzaObject);  */} 
         
      </p>
      
    </div>
  );
}
