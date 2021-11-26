import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const FrontCover = styled.div`
  background: ${({ type, theme }) => (type ? theme[type].color : '#444')};
  width: 100%;
  height: 30rem;

  > div {
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid transparent;
      height: 4rem;
      padding: 1rem 3rem;
      border-radius: 4rem;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.3rem;

      &:hover {
        border-color: #e3e3e3;
      }
    }
  }

  button {
    height: 4.8rem;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    /* margin-left: auto; */
    color: inherit;
    border-radius: 4.8rem;
    border: 0;
    cursor: pointer;
    background: #fff;
    transition: all 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      width: 2rem;
      height: 2rem;
      margin-top: -3px;
    }
  }

  @media (max-width: 600px) {
    a,
    button {
      font-size: 1.4rem;
      height: 4rem;
    }

    button {
      img {
        width: 1.8rem;
        height: 1.8rem;
        margin-top: -3px;
      }
    }
  }

  @media (max-width: 400px) {
    a {
      padding: 1rem;

      span {
        display: none;
      }
    }

    button {
      padding: 1rem 2rem;

      img {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperImg = styled.div`
  width: 30rem;
  height: 20rem;
  position: absolute;
  top: 8vh;
  /* margin-bottom: 10rem; */
  /* border: 1px solid red; */

  img {
    object-fit: cover;
  }
`;

export const InfoPokemon = styled.div`
  margin: 8rem 0 4rem;

  h1 {
    font-size: 4.8rem;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 2rem;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    margin: 6rem 0 4rem;

    h1 {
      font-size: 3.6rem;
    }
  }
`;

export const Pills = styled.span`
  display: block;

  color: #fff;
  width: 13rem;
  padding: 0.8rem 2rem;
  border-radius: 10rem;
  text-align: center;
  text-transform: uppercase;
  background: ${({ type, theme }) => (type ? theme[type].color : '#444')};

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;

export const Tabs = styled.button`
  width: 100%;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1.5rem 0;
  cursor: pointer;
  /* opacity: 1; */
  background: inherit;
  border: 1px solid transparent;
  border-image-slice: 1;
  outline: 0;
  background: ${({ pokemonType, theme }) =>
    '-webkit-' + theme[pokemonType].color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-image-source: ${({ active, pokemonType, theme }) =>
    active && theme[pokemonType].color};

  ${({ active }) =>
    active &&
    `
    border-radius: 5rem;
    border-top: none;
    border-left: none;
    border-right: none;
  `};

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
`;

export const TabContent = styled.div`
  display: none;
  width: 100%;
  padding: 2rem 0;

  ${({ active }) =>
    active &&
    `
    display: block;
  `}
`;

export const TabContentStats = styled.div`
  width: 100%;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
  /* border: 1px solid red; */
`;

export const StatsName = styled.span`
  width: 17ch;
  display: inline-block;
  text-transform: capitalize;
`;

export const StatsBar = styled.div`
  width: 100%;
  background: #f0f0f0;
  height: 0.8rem;
  position: relative;
  border-radius: 0.5rem;

  &::before {
    content: '';
    height: 0.8rem;
    width: ${({ baseState }) => baseState + '%'};
    background: ${({ type, theme }) => (type ? theme[type].color : '#444')};
    position: absolute;
    border-radius: 0.5rem;
  }

  @media (max-width: 600px) {
    height: 0.5rem;

    &::before {
      height: 0.5rem;
    }
  }
`;

export const BoxEvolution = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    max-width: 20rem;
    height: auto;
  }

  & .iconImg {
    width: 6rem;
    height: auto;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;

    & .iconImg {
      transform: rotate(90deg);
    }
  }
`;

export const MovesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

  li {
    border: 1px solid #e3e3e3;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 600px) {
    li {
      font-size: 1.4rem;
    }
  }
`;
