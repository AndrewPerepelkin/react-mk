import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';
import CardPage from '../../pages/card/CardPage';
import Home from '../../pages/home/Home';
import styles from './Main.module.scss';

const Main = ({films, onLike}) => {
  const {filmId} = useParams();
  const film = useMemo(() => {
    // eslint-disable-next-line arrow-body-style
    return films.find((f) => f.imdbID === filmId);
  }, [filmId, films]);

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
