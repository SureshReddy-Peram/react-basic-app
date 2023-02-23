import React from "react";
//import bootstrap from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";



export default function ButtonEx1() {
  const arr = [
    "primary",
    "secondary",
    "danger",
    "warning",
    "success",
    "info",
    "dark",
    "light",
    "link",
    "outline-primary",
    "outline-secondary",
  ];
  return (
    <>
      {/* Button colors */}
      {arr.map((variant) => (
        <Button key={variant} variant={variant} className="m-3 p-2">
          This is a {variant} button, check it out!
        </Button>
      ))
      }

       {/* Alerts */}
     {
       arr.map((variant)=> (
        <Alert key={variant} variant={variant} className="m-2 p-2" >
            This is an {variant} Alert
        </Alert>
       )) 
     } 
        
      {/* Alert Links */}  
        {
            arr.map( (variant)=> (
                <Alert key={variant} variant={variant} className="m-2">
                    This is an 
                    <Alert.Link href="#">Example Link</Alert.Link>
                </Alert>
            ))
        }       
    </>
  )
}
