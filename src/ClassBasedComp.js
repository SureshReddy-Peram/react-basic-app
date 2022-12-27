import React from "react";

class Message extends React.Component{
   render(){
    return <div>
             <h1>Message: {this.props.message}</h1>
             <p>Hello S</p>
           </div>
   }


}
export default Message;