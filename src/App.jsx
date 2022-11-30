import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFilms} from './hooks/useFilms';
import Loader from './components/Loader/Loader';
import Favorites from './pages/favorites/Favorites';
import Main from './layouts/Main/Main';

const App = () => {
  const {films, isLoading, onLike} = useFilms();
  return (
    <div className='bg-gray-900'>
      <BrowserRouter>
        <NavBar />
        {isLoading ? (
          <Loader />
        ) : (
          <Switch>
            <Route
              path='/favorites'
              exact
              render={() => {
                return (
                  <Favorites
                    films={films}
                    onLike={onLike}
                  />
                );
              }}
            />
            <Route
              path='/:filmId?'
              exact
              render={() => {
                return (
                  <Main
                    films={films}
                    onLike={onLike}
                  />
                );
              }}
            />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
