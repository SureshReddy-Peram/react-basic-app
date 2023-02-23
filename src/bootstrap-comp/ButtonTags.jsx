import React from 'react'
import {Button} from 'react-bootstrap';

export default function ButtonTags() {
  return (
    <div className="m-5">
    
        {/* We can use Button tag as a Link, input(submit, reset, button) buttons */} 
        <Button  href="#" variant="info" size="lg"> Link</Button> {' '}
        <Button type="submit" variant="success" size="sm" > Submit</Button> {' '}
        <Button as="input" type="submit" value="Submit" /> {' '} 
        <Button as="input" type="reset" value="Reset" /> {' '}
        <Button as="input" type="button" value="Button" /> {' '}

        {/* Block Button */}
        <Button variant="light" className="d-flex gap-3 mt-3" active>Block level Button</Button>
        <Button variant="danger" className="d-flex gap-3 mt-3" disabled>Block level Button</Button>

        {/* Button Loading state */}
        
    </div>
  )
}
