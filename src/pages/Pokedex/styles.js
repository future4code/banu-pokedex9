import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 2rem;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-items: center;
`;
