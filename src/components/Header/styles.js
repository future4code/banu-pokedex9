import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 12rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 12rem;
  max-width: 120rem;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 25rem;
    display: block;
  }

  & .pokebola {
    width: 5rem;
  }
`;
