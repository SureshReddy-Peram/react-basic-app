import React from "react";


class ToggleButton1 extends React.Component  {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
         //Note: instead of using below line of code, convert handleClick() to Arrow function
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (value,e)=>{
        console.log(e);
        console.log(value);
        this.setState((state)=>{
            return {isToggleOn : state.isToggleOn? false : true };
        });
        
        /* e.preventDefault();
        return alert("Link Clicked"); */
    }
   render() {
    return <div>
            <button onClick={(e)=>this.handleClick('some value',e) }> 
              {this.state.isToggleOn? 'ON' : 'OFF'}
            </button>
            {/* <a href="#page" onClick={this.handleClick}>Page1 </a> */}
           </div>;
   }
        /* Notes: In this lesson we learned about 
        1. We created ToggleButton Component, inside that we created a ToggleButton.
        when we 'Click' on it, it's gonna change the state from 'true' to 'false'.
        ToggleButton 'ON' and 'OFF' displaying on the screen.
        2.We have learned, how to pass an argument to event handler using this style(way).
        */    
}
export default ToggleButton1;