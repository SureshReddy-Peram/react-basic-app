import React from "react";
import Header from "./Header";
import Movies from "./Movies";
import movies from "../movies.json";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

const MoviesRoundup = () => {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4 py-2">
        <div className="row ">
        
        {movies.map((movie, imdbId) => (
          <Movies
            Key={imdbId}                       
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            release={movie.Released}
            trailer={movie.Trailer_url}
            rating={movie.imdbRating}
          />
        ))}
       </div>
      </div>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/I2TNlHVJ9KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30441.021755988935!2d78.30506969049276!3d17.501415575761083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2sin!4v1676486645421!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
};

export default MoviesRoundup;
