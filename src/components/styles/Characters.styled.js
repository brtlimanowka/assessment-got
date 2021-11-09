import styled from 'styled-components';

const CharactersStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
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
      cursor: pointer;
      i {
        margin-top: 1px;
        font-size: 1.4rem;
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
            bottom: 1px;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export default CharactersStyled;
