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
    width: 80%;
    header {
      display: flex;
      justify-content: space-evenly;
      span {
        flex-basis: 20%;
        font-size: 1.8rem;
      }
    }
    div.characters-item {
      display: flex;
      justify-content: space-evenly;
      span {
        flex-basis: 20%;
        font-size: 1.4rem;
      }
    }
  }
`;

export default CharactersStyled;
