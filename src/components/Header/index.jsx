import React from 'react';

import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img
          src='	https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png'
          alt='Logo pokemon'
        />
        <img
          src='	https://www.pngkey.com/png/full/144-1446994_pokeball-clipart-transparent-background-pokeball-png.png'
          alt='Pokebola'
          className='pokebola'
        />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
