import styled from 'styled-components';

const HouseStyled = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 40%;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
      h1 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
      }
      h2 em {
        font-size: 2rem;
      }
    }
    article {
      margin: 20px 0;
      * {
        font-size: 1.4rem;
      }
      ul {
        list-style: none;
        li {
          display: flex;
          margin: 5px 0;
          label {
            flex-basis: 20%;
          }
        }
      }
    }
    button {
      align-self: center;
      width: 20%;
      height: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default HouseStyled;
