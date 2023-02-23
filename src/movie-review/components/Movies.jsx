import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = (props) => {
  return (   
    <>           
      <div className="card" style={{width:"250px", border:"none", overFlow:"hidden"}} >
        <img className="card-img-top" src={props.poster} style={{width:"250px", height:"300px" }} alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {/* <p className="card-text">{props.release}</p> */}
            <div className="timeStamp"> 
                         {props.release}
                        {/* <small class="time">5 days ago</small> */}
             </div>
            <p className="card-text">{props.runtime}</p>
            <p className="card-text">IMDbRating : {props.rating}</p>
            <a href={props.trailer} target="_blank" rel="noopener noreferrer" className='card-link'>
                <p className="btn btn-dark">Watch Trailer</p>
            </a>
        </div>
      </div>    
     
    </>   
  )
}

export default Movies
