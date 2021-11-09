import styled from 'styled-components';

const CharactersStyled = styled.div`
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.primaryBackground},
    ${(props) => props.theme.colors.secondaryBackground}
  );
  height: calc(100% - 50px);
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  h1 {
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.headerBackground};
    text-align: center;
    font-size: 2.6rem;
    line-height: 2.6rem;
    margin-top: 20px;
  }
  div.characters-pagination {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
    button {
      flex-basis: 15%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      cursor: pointer;
      * {
        font-size: 1.4rem;
      }
      i {
        margin-top: 1px;
      }
    }
    div.pagination-settings {
      position: absolute;
      top: 100px;
      height: 120px;
      display: flex;
      flex-direction: column;
      h4,
      label {
        font-size: 1.4rem;
      }
      ul {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        li {
          display: flex;
          justify-content: space-between;
          margin: 5px 25px;
        }
      }
    }
  }
  div.characters-table {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 10px 3px 6px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 20px;
    width: 90%;
    header {
      display: flex;
      justify-content: space-evenly;
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-basis: 18%;
        font-size: 2rem;
      }
    }
    div.filter-gender select {
      width: 100px;
      font-size: 1.2rem;
      option {
        font-size: 1.2rem;
      }
    }
    div.filter-culture {
      input {
        font-size: 1.2rem;
        width: 150px;
      }
      label i {
        position: relative;
        width: 20px;
        text-align: center;
        font-size: 1.4rem;
        top: 1px;
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
          i {
            position: relative;
            bottom: 2px;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export default CharactersStyled;
