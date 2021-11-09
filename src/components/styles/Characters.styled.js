import styled from 'styled-components';

const CharactersStyled = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  height: calc(100% - 50px);
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  h1 {
    width: 50%;
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.colors.font};
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    font-size: 2.8rem;
    margin-top: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.font};
    box-shadow: 0 1px 0 black;
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
      border: none;
      color: ${(props) => props.theme.colors.font};
      background: ${(props) => props.theme.colors.secondaryBackground};
      border-radius: 5px;
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.secondaryBackground};
        background: ${(props) => props.theme.colors.disabled};
        &:hover {
          cursor: not-allowed;
          color: ${(props) => props.theme.colors.secondaryBackground};
          background: ${(props) => props.theme.colors.disabled};
        }
      }
      &:hover {
        background: ${(props) => props.theme.colors.highlight};
      }
      &:active {
        background: ${(props) => props.theme.colors.secondaryBackground};
      }
      * {
        font-size: 1.4rem;
      }
      i {
        margin-top: 1px;
      }
    }
    div.pagination-settings {
      position: absolute;
      top: 120px;
      height: 140px;
      width: 160px;
      padding: 3px;
      background: ${(props) => props.theme.colors.secondaryBackground};
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      color: ${(props) => props.theme.colors.font};
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      h4,
      label {
        text-align: center;
        padding: 3px 0;
        font-size: 1.4rem;
      }
      ul {
        background: ${(props) => props.theme.colors.primaryBackground};
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        li {
          display: flex;
          justify-content: space-between;
          margin: 5px 25px;
          input {
            border: none;
          }
        }
      }
    }
  }
  div.characters-table {
    padding: 10px;
    border-radius: 20px;
    width: 90%;
    header {
      color: ${(props) => props.theme.colors.font};
      display: flex;
      justify-content: space-evenly;
      padding-bottom: 5px;
      border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-basis: 18%;
        font-size: 2rem;
      }
    }
    div.filter-gender select {
      width: 150px;
      height: 22px;
      background: ${(props) => props.theme.colors.primaryBackground};
      color: ${(props) => props.theme.colors.font};
      border: none;
      outline: none;
      border-radius: 3px;
      padding-left: 3px;
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
      option {
        font-size: 1.2rem;
      }
    }
    div.filter-culture {
      input {
        width: 145px;
        height: 22px;
        background: ${(props) => props.theme.colors.primaryBackground};
        color: ${(props) => props.theme.colors.font};
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
        outline: none;
        padding-left: 5px;
        font-size: 1.2rem;
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
      &:nth-child(even) {
        background: ${(props) => props.theme.colors.tablePrimary};
      }
      display: flex;
      height: 50px;
      justify-content: space-evenly;
      align-items: center;
      color: ${(props) => props.theme.colors.tableFont};
      span {
        flex-basis: 18%;
        margin: 5px 0;
        font-size: 1.4rem;
        text-align: justify;
        a {
          display: block;
          text-decoration: none;
          font-size: inherit;
          color: inherit;
          i {
            color: ${(props) => props.theme.colors.highlight};
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
