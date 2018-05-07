import React, {Component} from 'react';
import MovieList from '../components/MovieList.js';

class MovieBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {id: 1, name: "Sherlock Gnomes"},
        {id: 2, name: "Life of the Party"},
        {id: 3, name: "Breaking In"},
        {id: 4, name: "Entebbe"},
        {id: 5, name: "Redoubtable"},
        {id: 6, name: "How to Talk to Girls at Parties"},
        {id: 7, name: "Revenge"},
        {id: 8, name: "Anon"},
        {id: 9, name: "The Cured"}
      ]
    };
  };

  render() {
    return (
      <div className="movie-box">
        IMDb: UK Opening This Week!
        <MovieList movies={this.state.movies}/>
      </div>
      );
  };
};

export default MovieBox;
