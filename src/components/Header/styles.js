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
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 20rem;
    display: block;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: inherit;
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid #e3e3e3;
      height: 4rem;
      padding: 1rem 3rem;
      border-radius: 4rem;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      max-width: 12rem;
    }

    a {
      font-size: 1.4rem;
    }
  }
`;
