import styled from 'styled-components';

const HouseStyled = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i.far {
    position: relative;
    top: 1px;
    font-size: 1.6rem !important;
  }
  div.house-details {
    width: 40%;
    display: flex;
    flex-direction: column;
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
      padding: 10px 0;
      border-bottom: 1px solid ${(props) => props.theme.colors.font};
      box-shadow: 0 1px 0 black;
      h1 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
        color: ${(props) => props.theme.colors.font};
        text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      }
      h2 em {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.highlight};
      }
    }
    article {
      margin: 20px 0;
      padding: 0 50px;
      animation: fadein linear 0.2s;
      transform-origin: left;
      * {
        font-size: 1.4rem;
      }
      ul {
        list-style: none;
        li {
          display: flex;
          min-height: 25px;
          margin: 5px 0;
          label {
            flex-basis: 20%;
            color: ${(props) => props.theme.colors.highlight};
          }
          span {
            flex-basis: 80%;
            color: ${(props) => props.theme.colors.tableFont};
          }
        }
      }
      @keyframes fadein {
        0% {
          opacity: 0;
          transform: scaleX(0%);
        }
        50% {
          opacity: 0.1;
          transform: scaleX(70%);
        }
        100% {
          opacity: 1;
          transform: scaleX(100%);
        }
      }
    }
  }
`;

export default HouseStyled;
