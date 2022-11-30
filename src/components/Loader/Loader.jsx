import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div>
        <Spinner
          animation='border'
          variant='light'
        />
      </div>
    </div>
  );
};

export default Loader;
