import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  handleClickWillWatch = () => {
    this.setState({
      willWatch: !this.state.willWatch
    });
    const { addMovieToWillWatch, removeMovieFromWillWatch, item } = this.props;
    this.state.willWatch
      ? removeMovieFromWillWatch(item.id)
      : addMovieToWillWatch(item);
  };

  getClassWillWatchButton = () =>
    `btn ${this.state.willWatch ? "btn-success" : "btn-secondary"} mb-2`;

  render() {
    const { item, removeMovie } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
          </div>
          <button
            type="button"
            className={this.getClassWillWatchButton()}
            onClick={this.handleClickWillWatch}
          >
            Will Watch
          </button>
          <button
            type="button"
            onClick={() => {
              removeMovie(item.id);
            }}
          >
            Delete movie
          </button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
