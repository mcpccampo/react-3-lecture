import React from 'react'
import Movie from './Movie'
import './MoviesList.css'
import data from '../data.json'

class MoviesList extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    render() {
        let mappedMovies = this.state.movies.map(element => <Movie key={element.id} movie={element}/>)

        return (
            <div className="movies-list-container">
                {mappedMovies}
            </div>
        )
    }
}

export default MoviesList;