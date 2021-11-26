import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export const CardPokemon = ({ pokemon, active, handleRemovePokemon }) => {
  if (pokemon)
    return (
      <S.Card key={pokemon.id}>
        <S.DeleteIcon
          onClick={() => handleRemovePokemon(pokemon.id)}
          active={active}
        >
          X
        </S.DeleteIcon>
        <S.Box>
          <img
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <Link to={`/pokemon-details/${pokemon.id}`}>{pokemon.name}</Link>
          <p>{pokemon.id < 100 ? `#0${pokemon.id}` : `#${pokemon.id}`}</p>
        </S.Box>

        <S.IconGroup>
          {pokemon.types.map((t, index) => (
            <S.TypeIcon key={index} type={t.type.name} />
          ))}
        </S.IconGroup>
      </S.Card>
    );
  else return null;
};
