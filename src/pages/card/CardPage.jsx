import React from 'react';
import {useHistory} from 'react-router-dom';
import FilmCard from '../../components/FilmCard/FilmCard';
import styles from './CardPage.module.scss';

const CardPage = ({film, onLike}) => {
  const history = useHistory();

  const handleReturn = () => {
    history.push('/');
  };
  return (
    <div className={styles.container}>
      {film ? (
        <FilmCard
          {...film}
          onLike={onLike}
        />
      ) : (
        <h2 className={styles.error}>Something went wrong</h2>
      )}
      <button
        className='btn btn-secondary'
        type='button'
        onClick={handleReturn}
      >
        Back to all Films
      </button>
    </div>
  );
};

export default CardPage;
