import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  handeClickWatch = () => {
    this.setState({
      willWatch: !this.state.willWatch
    });
    if (this.state.willWatch) {
      this.props.deleteMovieFromWillWatch(this.props.item.id);
    } else {
      this.props.addMovieToWillWatch(this.props.item);
    }
  };

  render() {
    const { item, deleteMovie } = this.props;
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
            <button
              type="button"
              className={`btn ${
                this.state.willWatch ? "btn-success" : "btn-secondary"
              }`}
              onClick={this.handeClickWatch}
              // onClick={addMovieToWillWatch.bind(null, item)}
            >
              Will Watch
            </button>
          </div>
          <button type="button" onClick={deleteMovie.bind(null, item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
