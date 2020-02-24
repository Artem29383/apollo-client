import React, { useState } from 'react';
import S from './AuthPage.styled';
import { useMutation } from '@apollo/react-hooks';
import { AUTH_MUTATION } from '../../graphql/mutation';
import useAction from '../../hooks/useAction';
import { SET_AUTH } from '../../models/auth/action';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth, { loading }] = useMutation(AUTH_MUTATION, {
    variables: { input: { login, password } }
  });
  const setAuth = useAction(SET_AUTH);
  
  const loginHandler = e => {
    setLogin(e.currentTarget.value);
  };
  
  const passHandler = e => {
    setPassword(e.currentTarget.value);
  };
  
  const authSubmit = async () => {
    try {
      const { data } = await auth();
      const director = data.authDirector.director;
      setAuth({ auth: true, director })
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <S.body>
      <S.form>
        <S.title>Авторизация</S.title>
        <S.inputDiv>
          <S.input
            value={login}
            onChange={loginHandler}
            placeholder='Логин'
          />
        </S.inputDiv>
        <S.inputDiv>
          <S.input
            value={password}
            onChange={passHandler}
            placeholder='Пароль'
          />
        </S.inputDiv>
        <S.inputDiv>
          <S.button disabled={loading} onClick={authSubmit}>Войти</S.button>
        </S.inputDiv>
      </S.form>
    </S.body>
  );
};

export default AuthPage;