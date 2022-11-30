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
      <FilmCard
        {...film}
        onLike={onLike}
      />
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
