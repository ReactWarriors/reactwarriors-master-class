import React from "react";

const MoviesWillWatch = props => {
  return (
    <div>
      <h4>Will Watch: {props.moviesWillWatch.length}</h4>
      <ul className="list-group">
        {props.moviesWillWatch.map(item => (
          <li className="list-group-item" key={item.id}>
            <div className="d-flex justify-content-between">
              <p>{item.title}</p>
              <p>{item.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesWillWatch;
