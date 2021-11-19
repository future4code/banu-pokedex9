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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 4rem 0;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 20rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.background};
  border: 1px solid #333;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  max-width: 120rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding-bottom: 2rem;

  button {
    min-width: 12rem;
    padding: 1rem 2rem;
    border: none;
    background: #5f606d;
    box-shadow: 0px 0px 10px rgba(95, 96, 109, 0.7);
    border-radius: 2rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: 0px 5px 10px rgba(95, 96, 109, 0.7);
    }
  }
`;
