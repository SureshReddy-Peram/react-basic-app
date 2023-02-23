import React from "react";

const Button = (props)=>{
    return ( <input type="button" value={props.label} onClick={props.handleClick} /* onClick={ ()=>{ alert("Button Clicked");}}  */ 
                 /* onClick={ ()=>{ console.log(props.label);}} */  /> );
           
}
export default Button;