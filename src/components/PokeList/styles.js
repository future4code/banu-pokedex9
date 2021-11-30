import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-items: center;
  gap: 2rem;

  padding: 4rem 0;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;

  button {
    min-width: 12rem;
    padding: 1rem 2rem;
    border: none;
    background: #5f606d;
    box-shadow: 0px 5px 10px rgba(95, 96, 109, 0.7);
    border-radius: 2rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      /* box-shadow: 0px 5px 10px rgba(95, 96, 109, 0.7); */
      filter: brightness(0.8);
    }
  }
`;
