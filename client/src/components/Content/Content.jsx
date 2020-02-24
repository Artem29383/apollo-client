import React from 'react';
import S from './Content.styled';
import { Redirect, Route, Switch } from 'react-router-dom';
import MoviesPage from '../../pages/MoviesPage';
import DirectorsPage from '../../pages/DirectorsPage/DirectorsPage';

const Content = () => {
  return (
    <S.body>
      <Switch>
        <Route exact path='/' render={() => <MoviesPage />} />
        <Route path='/directors' render={() => <DirectorsPage />} />
        <Redirect to='/' />
      </Switch>
    </S.body>
  );
};

export default Content;