import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="movie-title">{props.Movie.title}</div>
      <div className="movie-year">{props.Movie.year}</div>
    </div>
  );
};

export default Movie;
