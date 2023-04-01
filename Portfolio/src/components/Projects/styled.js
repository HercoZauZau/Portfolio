import styled from 'styled-components';
import colors from '../../config/colors';

export const Main = styled.div`
  background: #1c1d24;
  color: #fff;
  padding-top: 50px;

  h2 {
    font-size: 2.2em;
    padding: 25px;
    margin-left: 100px;
  }

  .p-list {
    text-align: center;
  }

  .circle {
    height: 60px;
    width: 60px;
    background-color: ${colors.primaryColor};
    border-radius: 100%;
    margin: -80px 0 30px 100px;
    box-shadow: 0 0 40px -10px #000;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #878e99;
  }

  ol {
    list-style: none;
    padding: 0 15px;
    width: fit-content;
  }

  li {
    text-align: justify;
    width: 80%;
    min-height: 275px;
    margin: 15px;
    padding: 30px;
    overflow: hidden;
    background: #131416;
    display: inline-block;
    border-left: 5px solid ${colors.primaryColor};
    border-radius: 4px 0 0 4px;
    cursor: pointer;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    .links {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: auto;
      width: 80%;
      display: none;

      button {
        border-radius: 20px;
        background: transparent;
        border: 1px solid;
        color: #878e99;
        text-align: center;

        &:hover {
          background: ${colors.primaryColor};
          color: #fff;
          border: none;
        }
      }

      .f-bt {
        color: ${colors.primaryColor};
        border: 1px solid;
      }
    }

    img {
      width: 0;
      height: 0;
    }

    &:hover {
      padding: 20px;
      border: none;

      .links {
        display: flex;
      }

      h3 {
        font-size: 25px;
        color: #878e99;
        text-align: center;
        font-style: italic;
        margin: 20px 0 20px 0;
      }

      p {
        display: none;
      }

      img {
        width: 100%;
        height: 250px;
      }
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    text-align: left;
    color: ${colors.primaryColor};
  }

  @media (min-width: 600px) {
    li {
      margin: 25px;
      padding: 40px 32px 32px;
      width: 440px;
    }

    h3 {
      font-size: 30px;
      margin: 0 0 32px;
    }
  }
`;
