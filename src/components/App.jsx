import React from "react";
import moviesData from "../moviesData";
import MovieItem from "./MovieItem";
// console.log(moviesData);

// UI = fn(state, props)
// App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    // updateMoviesWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  deleteMovieFromWillWatch = id => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      movie => movie.id !== id
    );

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  deleteMovie = id => {
    console.log("this", this);
    console.log("delete", id);
    const updateMovies = this.state.movies.filter(movie => {
      return movie.id !== id;
    });
    console.log(updateMovies);
    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  render() {
    console.log("render");
    const { movies, moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {movies.map(movie => {
                return (
                  <div key={movie.id} className="col-6 mb-4">
                    <MovieItem
                      item={movie}
                      deleteMovie={this.deleteMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {moviesWillWatch.length}</h4>
            <ul className="list-group">
              {moviesWillWatch.map(movie => {
                return (
                  <li key={movie.id} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <p>{movie.title}</p>
                      <p>{movie.vote_average}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
