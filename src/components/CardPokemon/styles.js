import styled from 'styled-components';

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

export const DeleteIcon = styled.button`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  top: 3px;
  right: 3px;
  width: 3rem;
  height: 3rem;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
  color: inherit;
  cursor: pointer;
`;
