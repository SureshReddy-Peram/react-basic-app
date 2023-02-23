import React from "react";

const OutputScreenRow = (props)=>{
    return <div className="screen-row">
             <input type="text" value={props.value} readOnly />
           </div>
}
export default OutputScreenRow;