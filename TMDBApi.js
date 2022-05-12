import axios from 'axios';
import { REACT_APP_API_KEY } from '@env';

export async function fetchFilms(text, page) {
  const url =
    `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=fr&query=${text}&page=${page}`;

  return axios(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function getImgFromApi(path) {
  return `https://image.tmdb.org/t/p/w300${path}`;
}
