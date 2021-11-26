import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img
          src='	https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png'
          alt='Logo pokemon'
        />

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pokedex'>Pokedex</Link>
        </nav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
