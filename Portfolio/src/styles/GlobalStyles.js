import styled, { createGlobalStyle } from 'styled-components';
import colors from '../config/colors';

export default createGlobalStyle`
 :root {
    --body-font: 'Nunito', sans-serif;
    --title-font: "Saira",Helvetica,Arial,sans-serif;
    --logo-font: 'Saira Stencil One', cursive;
  }

 * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
 }

 body {
    font-family: var(--body-font);
    background: ${colors.bgColor2};
    color: ${colors.primaryDarkColor};
 }

 html, body, #root {
    height: 100%;
 }

 button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
 }

 a {
    text-decoration: none;
 }

 ul {
    list-style: none;
 }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
