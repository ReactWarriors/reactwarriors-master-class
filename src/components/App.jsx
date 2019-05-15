import React from "react";
import { moviesData } from "../moviesData";
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
    const updateMovieWillWatch = [...this.state.moviesWillWatch, movie];
    // updateMovieWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  };

  removeMovieFromWillWatch = id => {
    const updateMovieWillWatch = this.state.moviesWillWatch.filter(movie => {
      return movie.id !== id;
    });

    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  };

  removeMovie = id => {
    console.log("delete movie", id);
    console.log("this", this);
    const updateMovies = this.state.movies.filter(movie => movie.id !== id);
    console.log("updateMovies", updateMovies);

    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mt-4" key={movie.id}>
                    <MovieItem
                      item={movie}
                      temp={true}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length}</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map((movie, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <div className="d-flex justify-content-between">
                      <p>{movie.title}</p> <p>{movie.vote_average}</p>
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
