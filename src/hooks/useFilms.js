import {useEffect, useState, useCallback} from 'react';

const SLUG = 'marvel';
const API_KEY = '9b67fc54';

const BASE_URL = `https://www.omdbapi.com/?s=${SLUG}&apikey=${API_KEY}`;

// eslint-disable-next-line import/prefer-default-export
export const useFilms = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const setToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key) || '{}');
  };

  const formatResponse = (data) => {
    const formatedData = data.Search.map((film) => {
      const dataFromLocalStorage = getFromLocalStorage('likedFilms');

      return {...film, liked: dataFromLocalStorage[film.imdbID] || false};
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

  const onLike = useCallback((id) => {
    setFilms((prevState) => {
      return prevState.map((film) => {
        return film.imdbID === id ? {...film, liked: !film.liked} : film;
      });
    });

    const likedFilmsFromLocalStorage = getFromLocalStorage('likedFilms');
    if (likedFilmsFromLocalStorage[id]) {
      likedFilmsFromLocalStorage[id] = false;
    } else {
      likedFilmsFromLocalStorage[id] = true;
    }

    setToLocalStorage('likedFilms', likedFilmsFromLocalStorage);
  }, []);

  return {films, isLoading, error, onLike};
};
