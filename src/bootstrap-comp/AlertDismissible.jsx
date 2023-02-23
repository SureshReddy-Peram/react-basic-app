import React, {useState} from 'react'
import {Alert, Button} from 'react-bootstrap';

export default function AlertDismissible() {
   
    const [show, setShow] = useState(true);

    if(show) {
  return (
    <div>
      
      <Alert variant="success" show={show} onClose={()=> setShow(false)} dismissible>
        <Alert.Heading>
            Oh Snap, you got an error.
        </Alert.Heading>
        <p>Change this and that, try again. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo recusandae reiciendis provident aliquam facere amet minus sint voluptatem blanditiis.</p>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit et dolores! Nisi, fuga odio error assumenda nam voluptatem dolores in sed quos fugit! Ipsum voluptatum quidem accusamus suscipit voluptate.</p>
        
      </Alert>
    </div>
  ) 
  }
  
  return <Button variant="success" onClick={()=>setShow(true)}> Show Alert</Button>;
}
