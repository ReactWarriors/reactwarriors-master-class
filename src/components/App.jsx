import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import MoviesWillWatch from "./MoviesWillWatch";
// const App = () => {
//   return <div>Hello ReactWarriors</div>;
// };
// const App = new React.Component()
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  addMovieToWillWatch = movie => {
    console.log(movie);
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    // updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieToWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(item => (
                <div className="col-6 mb-4" key={item.id}>
                  <MovieItem
                    item={item}
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieToWillWatch={this.removeMovieToWillWatch}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3">
            <MoviesWillWatch moviesWillWatch={this.state.moviesWillWatch} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
