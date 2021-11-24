import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const FrontCover = styled.div`
  background: ${({ type, theme }) => (type ? theme[type] : '#444')};
  width: 100%;
  height: 30rem;
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
  margin-bottom: 8vh;

  img {
    object-fit: cover;
  }
`;

export const InfoPokemon = styled.div`
  margin: 7rem 0 4rem;

  h1 {
    font-size: 4rem;
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
`;

export const Pills = styled.span`
  display: block;

  color: #fff;
  width: 13rem;
  padding: 0.8rem 2rem;
  border-radius: 10rem;
  text-align: center;
  text-transform: uppercase;
  background: ${({ type, theme }) => (type ? theme[type] : '#444')};
`;

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-bottom: 4rem;
`;

export const Tabs = styled.button`
  width: 100%;
  font-size: 2rem;
  padding: 1.5rem 0;
  cursor: pointer;
  opacity: 0.6;
  background: inherit;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TabContent = styled.div`
  display: none;
  width: 100%;

  ${({ active }) =>
    active &&
    `
    display: block;
  `}
`;

export const TabContentStats = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
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
    height: 0.9rem;
    width: ${({ baseState }) => baseState + '%'};
    background: ${({ type, theme }) => (type ? theme[type] : '#444')};
    position: absolute;
    border-radius: 0.5rem;
  }
`;
