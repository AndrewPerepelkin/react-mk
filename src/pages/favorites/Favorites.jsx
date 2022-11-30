import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Favorites.module.scss';
import FilmCard from '../../components/FilmCard/FilmCard';

const Favorites = ({films, onLike}) => {
  // eslint-disable-next-line arrow-body-style
  const favoritesFilms = films.filter((film) => film.liked);
  return (
    <div className={styles.container}>
      {favoritesFilms.length === 0 ? (
        <h1 className={styles.title}>You have not favorites Films</h1>
      ) : (
        <>
          <h1 className={styles.title}>Your favorites Films</h1>
          <Container className={styles.cards}>
            <Row>
              {favoritesFilms.map((film) => {
                return (
                  <Col
                    key={film.imdbID}
                    className='m-3'
                  >
                    <FilmCard
                      {...film}
                      onLike={onLike}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default Favorites;
