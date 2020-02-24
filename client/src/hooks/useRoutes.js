import React, { Fragment, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Content from '../components/Content/Content';
import AuthPage from '../pages/AuthPage/AuthPage';
import styled from 'styled-components';
import AddMovie from '../components/AddMovie/Addmovie';

const Button = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

export const useRoutes = data => {
  const [show, setShow] = useState(false);
  console.log(show);
  if (data.auth) {
    return (
      <Fragment>
        <Nav />
        <Content />
        <Button onClick={() => setShow(!show)}>+</Button>
        {show && <AddMovie data = {data.director} />}
      </Fragment>
    )
  }
  return (
    <Switch>
      <Route path="/" exact render={() => <AuthPage />} />
      <Redirect to='/' />
    </Switch>
  )
};