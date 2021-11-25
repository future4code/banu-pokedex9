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
  max-width: 20rem;
  padding: 2rem 0 1rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.background};
  border: 1px solid #e3e3e3;
  border-radius: 2rem;
  box-shadow: 0px 2px 4px rgba(93, 89, 106, 0.1);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  padding: 0 2rem;

  img {
    display: block;
    width: 100%;
    height: 10rem;
  }

  a {
    color: inherit;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.8rem;
    margin-top: 1rem;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.5rem;
    color: #a4a4a4;
    font-weight: 400;
    line-height: 2.2rem;
  }
`;

export const IconGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 1rem 0; */
`;

export const TypeIcon = styled.div`
  background: url(${({ type, theme }) => theme[type].icon}) no-repeat center
    center;
  background-size: cover;
  width: 4rem;
  height: 4rem;

  border-radius: 4rem;
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
