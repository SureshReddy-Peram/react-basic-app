import React from 'react';

export default function OutputScreenRow(props) {
  return (
    <div className='screen-row'>
      <input type="text" value={props.value}  readOnly/>
    </div>
  )
}
