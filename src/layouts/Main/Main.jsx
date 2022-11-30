import React from 'react';
import {useParams} from 'react-router-dom';
import CardPage from '../../pages/card/CardPage';
import Home from '../../pages/home/Home';
import styles from './Main.module.scss';

const Main = ({films, onLike}) => {
  const {filmId} = useParams();
  // eslint-disable-next-line arrow-body-style
  const film = films.find((f) => f.imdbID === filmId);
  return (
    <div className={styles.container}>
      {filmId ? (
        <CardPage
          film={film}
          onLike={onLike}
        />
      ) : (
        <Home
          films={films}
          onLike={onLike}
        />
      )}
    </div>
  );
};

export default Main;
