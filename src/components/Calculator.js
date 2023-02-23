import React, { useState } from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OutputScreen";
import Button from "./Button";

export default function Calculator() {
     
      const [num, setNum] = useState('');

        return (
            <div className="calc">
            <CalculatorTitle />
            <div className="main">
             <OutputScreen />
              <div className="btn-group">
                <Button label={'Clear'}  />
                
              </div>
            </div>
            </div>
        );

}
