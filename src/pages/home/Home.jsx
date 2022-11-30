import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Home.module.scss';
import FilmCard from '../../components/FilmCard/FilmCard';

const Home = ({films, onLike}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Films</h1>
      <Container className={styles.cards}>
        <Row>
          {films.map((film) => {
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
    </div>
  );
};

export default Home;
