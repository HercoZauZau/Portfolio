import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  display: inline-block;
  width: 370px;
  height: 450px;
  background: ${colors.bgColor1};
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  margin: 0 15% 50px 50px;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  text-align: initial;

  @media (max-width: 600px) {
    width: 80%;
    margin: 0 0 50px 0;
  }

  h3 {
    margin: 10px 0 50px 0;
    padding-bottom: 15px;
    width: 180px;
    color: #fff;
    border-bottom: 1px solid ${colors.primaryColor};
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 30px;
    background-color: ${colors.bgColor2};
    outline: none;
    resize: none;
    border: none;
    transition: all 0.3s;
  }

  input,
  textarea {
    color: #fff;
  }

  input:focus,
  textarea:focus {
    border: 2px solid ${colors.primaryColor};
  }

  input::placeholder,
  textarea::placeholder {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  textarea {
    overflow: auto;
    resize: vertical;
    width: 100%;
    height: 80px;
    padding: 12px;
    background-color: ${colors.bgColor2};
    border: none;
    transition: all 0.3s;
  }

  button {
    float: right;
    padding: 8px 30px;
    margin: 40px 0 0 0;
    border: 2px solid ${colors.primaryColor};
    background: 0;
    color: ${colors.primaryColor};
    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover {
    background: ${colors.primaryColor};
    color: #fff;
  }
`;

export const Social = styled.div`
  display: inline-block;
  color: #808080;
  width: fit-content;
  padding: 20px;
  text-align: initial;

  div {
    margin: 20px 0 20px 0;
    padding: 0 0 0 20px;
  }

  p {
    text-align: center;
    font-style: italic;
    font-size: 22px;
    margin-bottom: 45px;
    color: ${colors.primaryColor};
  }

  svg,
  img {
    width: 15px;
    height: 15px;
    margin: 0 35px 0 0;
  }

  .socialNetworks {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid;
    border-bottom: 1px solid;
    margin-top: 30px;
    padding: 0 20px 0 20px;

    svg,
    img {
      color: #fff;
      width: 25px;
      height: 25px;

      &:last-of-type {
        margin: 0;
      }
    }
  }
`;

export const Main = styled.div`
  padding: 100px 10px;
  text-align: center;

  h2 {
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 100px 0;
  }
`;
