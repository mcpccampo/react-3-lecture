import React from 'react';
import './Movie.css';

function Movie(props) {
  const favorite = props.movie.favorite ? 'favorite' : '';
  return (
    <div className={`movie-container ${favorite}`}>
      <h3>{props.movie.name}</h3>
      <p>{props.movie.rating}</p>
      <p>{props.movie.year}</p>
      <p>{props.movie.description}</p>
      {/* <button onClick={props.handleFavorite}>Fav?</button> */}
      <button onClick={() => props.handleFavorite(props.movie.id)}>Fav?</button>
    </div>
  );
}

export default Movie;
