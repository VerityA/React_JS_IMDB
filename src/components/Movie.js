import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return(
      <div className="movie">
        <h4>{this.props.name}</h4>
      </div>
    );
  };
};


export default Movie;
