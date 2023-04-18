import './App.css';
import searchIcon from './search.svg';
import { apiService } from './api.service.ts';

import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

//8eb04bba

// const API_URL = 'http://www.omdbapi.com?apikey=8eb04bba';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();
  //   console.log('app.js', data)

  //   setMovies(data.Search)
  // }

  const handleButtonClick = async () => {
    const data = await apiService.searchMovies(searchTerm);
    setMovies(data.Search);
  };

  useEffect(() => {
    // searchMovies('Spiderman')
    apiService.searchMovies('Spiderman').then((data) => setMovies(data.Search));
  }, []);
  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={handleButtonClick}
          />
      </div>

      { movies?.length > 0 
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            )
            )}   
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

    </div> 
  );
}

export default App;
