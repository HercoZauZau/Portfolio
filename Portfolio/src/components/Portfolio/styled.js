import styled from 'styled-components';

import colors from '../../config/colors';

export const Main = styled.div`
  padding: 75px 20px;
  color: #fff;
  text-align: center;

  img {
    width: 18%;
    min-width: 150px;
    margin-left: 10%;
    animation: spin 5s linear infinite;
  }

  .col {
    min-width: 300px;
    width: 27.5%;
    height: 425px;
    padding: 0 12px 0 12px;
    margin-bottom: 100px;
    display: inline-block;
    text-align: start;

    h5 {
      font-size: 24px;
      font-weight: 700;
    }

    .bottom-bar {
      width: 10%;
      height: 3px;
      background-color: ${colors.primaryColor};
      margin: 15px 0 30px 0;
    }

    .col-content {
      background-color: #1c1d24;
      width: 100%;
      height: 100%;
      display: inline-block;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      margin: 0;
      padding: 25px;
      font-family: monospace;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;

      .content {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;

        &:nth-of-type(2) {
          border-top: 0.8px dotted;
          border-bottom: 0.8px dotted;
          margin: 20px 0 20px 0;
          padding: 25px 0 25px 0;
        }

        span {
          border-radius: 30px;
          display: inline-block;
          font-size: 12px;
          line-height: 1;
          margin-bottom: 16px;
          padding: 4px 12px;
          vertical-align: top;
          background: #000000;
        }

        h6 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 0.6rem;
          margin-top: 0;
          color: ${colors.primaryColor};
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
          color: #878e99;
        }
      }
    }

    .skill-bar {
      background-color: ${colors.primaryColor};
      font-size: 10px;
      font-weight: 400;
      line-height: 1.7;
      height: 10px;
      text-align: end;
      border-radius: 3px;

      p {
        position: relative;
        bottom: 15px;
        right: 10px;
      }
    }

    .skill {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      margin-bottom: 35px;

      h6 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 10px;
        margin-top: 0;
        color: #fff;
      }
    }
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
  }

  .gray-p {
    p {
      color: #878e99;
    }
  }

  @media (max-width: 600px) {
    img {
      margin-top: 50px;
    }

    .main {
      display: inline-block;
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
