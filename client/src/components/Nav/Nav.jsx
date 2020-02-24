import React from 'react';
import S from './Nav.styled';
import movies from './../../assets/play.svg'
import dir from './../../assets/director.svg'
import { useStore } from '../../store/store';

const Nav = () => {
  const [{auth}] = useStore();
  return (
    <S.Navigation>
      <S.Item>
        <S.User>
          Имя: {auth.director.name}
          <br/>
          Login: {auth.director.login}
        </S.User>
      </S.Item>
      <S.Item>
        <S.NavLinkItem to='/'>
          <S.Img src={movies} />
          <S.Title>movies</S.Title>
        </S.NavLinkItem>
      </S.Item>
      <S.Item>
        <S.NavLinkItem to='/directors'>
          <S.Img src={dir} />
          <S.Title>directors</S.Title>
        </S.NavLinkItem>
      </S.Item>
    </S.Navigation>
  )
};

export default Nav