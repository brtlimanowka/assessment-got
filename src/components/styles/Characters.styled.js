import styled from 'styled-components';

const CharactersStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.6rem;
    margin: 20px 0;
  }
  div.characters-table {
    width: 90%;
    header {
      display: flex;
      justify-content: space-evenly;
      span {
        flex-basis: 18%;
        text-align: center;
        font-size: 2rem;
      }
    }
    div.characters-item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      span {
        flex-basis: 18%;
        margin: 5px 0;
        line-height: 1.4rem;
        font-size: 1.4rem;
        text-align: justify;
        a {
          display: block;
          text-decoration: none;
          font-size: inherit;
          color: inherit;
        }
      }
    }
  }
`;

export default CharactersStyled;
