import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  color: #fff;

  div#masthead-wrapper {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    background: #858585;
  }

  .masthead-content-wrapper img {
    height: 800px;
    float: right;
  }

  .title-container {
    width: 100%;
    height: 80%;
    margin: 12% auto;
    position: absolute;
    display: flex;
    justify-content: start;
    flex-direction: column;
    z-index: 10;
    padding: 0 10% 2% 10%;
  }

  h2 {
    font-size: 64px;
    line-height: 80px;
    margin-bottom: 50px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000000;
    font-family: var(--title-font);

    .title-greet {
      font-size: 1.5rem;
      line-height: 1.2;
      margin-bottom: 0.5rem;
      font-weight: 700;
      color: ${colors.primaryColor};
      text-transform: capitalize;
      text-shadow: 1px 1px 2px #000000;
    }

    .title-name {
      margin-left: 0.3em;
    }
  }

  h5 {
    font-size: 20px;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  p {
    width: 45%;
    line-height: 25px;
    text-align: justify;
    letter-spacing: 1px;
    color: #000000;
  }

  @media screen and (max-width: 600px) {
    p {
      display: none;
    }

    .masthead-content-wrapper img {
      height: 600px;
      width: 100%;
      object-fit: cover;
    }

    .title-container {
      width: 100%;
      height: fit-content;
    }
  }

  @media screen and (max-width: 850px) {
    .title-container {
      padding: 0 5% 0 5%;
      margin-top: 200px;
    }

    h2 {
      font-size: 2.5em;
      color: #fff;
    }
  }
`;
