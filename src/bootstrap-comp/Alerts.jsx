import React from 'react'
import {Alert} from "react-bootstrap";

const Alerts = ()=> {
  return (
    <div>
      <Alert variant='warning'>
        <Alert.Heading >
            Hai, How do you do?
        </Alert.Heading>
        <p>Nice to see you.</p>
        <hr />
        <p className="mb-0">What are you doing? Where are you staying? How many children?</p>
      </Alert>
    </div>
  )
}
export default Alerts;

