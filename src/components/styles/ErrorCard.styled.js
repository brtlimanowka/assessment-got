import styled from 'styled-components';

const ErrorCardStyled = styled.div`
  background: ${(props) => props.theme.colors.font};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 500px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 10px 0 20px 0;
    text-align: center;
    font-size: 3rem;
  }
  div.topbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 25px;
    background: ${(props) => props.theme.colors.error};
    border-radius: 10px 10px 0 0;
  }
  i {
    font-size: 2rem;
    margin-right: 10px;
    &:hover {
      color: ${(props) => props.theme.colors.font};
      cursor: pointer;
    }
  }
  p {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    * {
      font-size: 1.8rem;
    }
    label {
      flex-basis: 30%;
    }
  }
`;

export default ErrorCardStyled;
