const API_URL = 'http://www.omdbapi.com?apikey=8eb04bba';

async function searchMovies(title: string) {
  const response = await fetch(`${API_URL}&s=${title}`);
  return response.json();
}

export const apiService = {
  searchMovies
};