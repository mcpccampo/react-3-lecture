import React from 'react';
import Movie from './Movie';
import './MoviesList.css';
import data from '../data.json';

class MoviesList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite(id) {
    let changedArray = this.state.movies.map((e) => {
      if (e.id === id) {
        return { ...e, favorite: true };
      } else {
        return e;
      }
    });

    this.setState({
      movies: changedArray,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('Loading Component Did Mount ..... ');
      this.setState({
        movies: data,
      });
    }, 2500);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    if (prevState.isLoading) {
      // you can lso check the prevstate
      this.setState({
        isLoading: false,
      });
    }
  }

  componentWillUnmount() {}

  render() {
    let mappedMovies = this.state.movies.map((element) => (
      <Movie key={element.id} movie={element} handleFavorite={this.handleFavorite} />
    ));

    return (
      <div className="movies-list-container">
        {this.state.isLoading ? 'loading...' : mappedMovies}
      </div>
    );
  }
}

export default MoviesList;
