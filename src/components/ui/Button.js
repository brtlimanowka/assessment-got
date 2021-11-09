import styled from 'styled-components';

const Button = styled.button`
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
`;

export default Button;
