import React, {useState} from 'react';
import {Alert, Button} from 'react-bootstrap';

const AlertDismiss2 = ()=>{

    const [work, setWork] = useState(true);

    
    return (
        <>
         <Alert work={work} variant="success" style={{margin:"50px"}} >
            <Alert.Heading> What's the progress in work?</Alert.Heading>
            <p>Work is in Full swing, 50% completed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt dignissimos doloribus ad optio ipsam, nesciunt deleniti id accusantium laudantium.</p>
            <br />

            
            <div className="d-flex justify-content-end">
            <Button variant="outline-info" onClick={ ()=>setWork(false)} >
                Close me yar!
            </Button>
            </div>
                     
         </Alert>

         {
           !work && <Button variant="warning" onClick={()=>setWork(true)} style={{margin:"50px"}} > Send Alert </Button>
         }

         
        </>
    )   
}
export default AlertDismiss2;
  