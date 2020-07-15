import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 42px;
  color: #3a3a3a;
  line-height: 56px;
  max-width: 450px;
  margin-top: 40px;
`;

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      span {
        margin-left: 16px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Header = styled.div`
  max-width: 100%;
  display: flex;
  align-items: stretch;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      
      strong {
        margin-top: 20px;
        font-size: 24px;
        margin-left: 24px;
      }

      p {
        font-size: 14px;
        margin-left: 24px;
      }
    }

    section {
      a {
        margin-left: 24px;
      }
    }
  }
`;
