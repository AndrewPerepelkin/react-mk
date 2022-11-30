import {useEffect, useState} from 'react';

const SLUG = 'marvel';
const API_KEY = '9b67fc54';

const BASE_URL = `https://www.omdbapi.com/?s=${SLUG}&apikey=${API_KEY}`;

// eslint-disable-next-line import/prefer-default-export
export const useFilms = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatResponse = (data) => {
    const formatedData = data.Search.map((film) => {
      return {...film, liked: false};
    });
    return formatedData;
  };

  const getFilms = () => {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const formatedData = formatResponse(data);
        setFilms(formatedData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFilms();
  }, []);

  const onLike = (id) => {
    const updatedFilms = films.map((film) => {
      return film.imdbID === id ? {...film, liked: !film.liked} : film;
    });
    setFilms(updatedFilms);
  };

  return {films, isLoading, error, onLike};
};
