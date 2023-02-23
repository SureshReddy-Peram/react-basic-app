import React, {useState, useEffect} from "react";
import {Button} from 'react-bootstrap';



export default function ButtonStateFunction() {
    
    
      const [isLoading, setLoading] = useState(false);      
    
      const handleClick = () => setLoading(true);
    
      return (
        <>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          Button
        </Button> 
         
        </>
  );
}
