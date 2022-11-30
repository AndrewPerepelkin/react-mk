import React from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './FilmCard.module.scss';
import favourite from '../../assets/img/favourite.png';
import notFavourite from '../../assets/img/notFavourite.png';

const FilmCard = ({Title, Poster, Year, imdbID, liked, onLike}) => {
  const {filmId} = useParams();
  const handleLike = (id) => {
    onLike(id);
  };
  return (
    <div className={styles.container}>
      {filmId ? (
        <>
          <img
            src={Poster}
            alt={Title}
            className={styles.image}
          />
          <h3 className={styles.title}>{Title}</h3>
        </>
      ) : (
        <Link
          to={`/${imdbID}`}
          className={styles.link}
        >
          <img
            src={Poster}
            alt={Title}
            className={styles.image}
          />
          <h3 className={styles.title}>{Title}</h3>
        </Link>
      )}
      <p>{Year}</p>
      <button
        type='button'
        // eslint-disable-next-line arrow-body-style
        onClick={() => handleLike(imdbID)}
        className={styles.likeBtn}
      >
        <img
          src={liked ? favourite : notFavourite}
          alt='like'
          className={styles.like}
        />
      </button>
    </div>
  );
};

export default FilmCard;
