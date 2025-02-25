import { MovieData } from './types/MovieData';

const API_URL = 'https://www.omdbapi.com/?apikey=cde7c2bd';

export function getMovie(query: string): Promise<MovieData> {
  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
