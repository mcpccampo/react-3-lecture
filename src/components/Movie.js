import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
        <div className="movie-container">
            <h3>{props.movie.name}</h3>
            <p>{props.movie.rating}</p>
            <p>{props.movie.year}</p>
            <p>{props.movie.description}</p>
        </div>
    )
}

export default Movie;