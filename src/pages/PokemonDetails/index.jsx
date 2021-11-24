import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { PokemonsContex } from '../../context/PokemonContext';
import {
  ButtonGroup,
  Container,
  FrontCover,
  TabContent,
  Tabs,
  Content,
  WrapperImg,
  InfoPokemon,
  Pills,
  TabContentStats,
  TabsContainer,
  StatsBar,
  StatsName,
} from './styles';

const types = ['Stats', 'Evolution', 'Moves'];

export const PokemonDetails = () => {
  const params = useParams();
  const { pokemons } = useContext(PokemonsContex);
  const [evolutions, setEvolutions] = useState({});
  const [active, setActive] = useState(types[0]);

  useEffect(() => {
    async function getPokemonEvolution() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${params.id}`
      );
      setEvolutions(response.data);
    }
    getPokemonEvolution();
  }, [params.id]);

  const pokemonsEvolution = evolutions?.chain?.evolves_to[0];
  const pokemonEvolutionDetails = pokemons.find(
    (pokemon, index) => pokemon.name === pokemonsEvolution?.species?.name
  );

  const pokemonDetails = pokemons.find(
    (pokemon) => Number(params.id) === pokemon.id
  );
  const pokemonType = pokemonDetails?.types[0]?.type?.name;

  if (pokemonDetails)
    return (
      <Container>
        <FrontCover type={pokemonType} />
        <Content>
          <WrapperImg>
            <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemonDetails.id}.png`}
              alt={pokemonDetails.name}
            />
          </WrapperImg>

          <InfoPokemon>
            <h1>{pokemonDetails.name}</h1>
            <div>
              {pokemonDetails.types.map((item) => (
                <Pills type={item.type.name}>{item.type.name}</Pills>
              ))}
            </div>
          </InfoPokemon>
          <TabsContainer>
            <ButtonGroup>
              {types.map((type, index) => (
                <Tabs
                  key={index}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </Tabs>
              ))}
            </ButtonGroup>

            <TabContent active={active === 'Stats'}>
              {pokemonDetails.stats.map((item, index) => (
                <TabContentStats key={index}>
                  <StatsName>{item.stat.name}</StatsName>
                  <span>0{item.effort}</span>
                  <StatsBar
                    baseState={item.base_stat > 100 ? 100 : item.base_stat}
                    type={pokemonType}
                  />
                </TabContentStats>
              ))}
            </TabContent>
            <TabContent active={active === 'Evolution'}>{active}</TabContent>
            <TabContent active={active === 'Moves'}>{active}</TabContent>
          </TabsContainer>
        </Content>
      </Container>
    );
  else return null;
};
