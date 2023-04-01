import styled from 'styled-components';

import colors from '../../config/colors';

export const Nav = styled.nav`
  .nav {
    height: 80px;
    width: 100%;
    padding: 15px 10px 15px 8%;
    background-color: transparent;
    position: fixed;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.8em;
    color: #000000;
  }

  .showBG {
    background: ${colors.bgColor1};
    color: #fff;
  }

  h1 {
    padding-top: 15px;
    font-size: 2.2em;
    font-weight: 700;
    font-family: var(--logo-font);
  }

  .nav > .nav-header {
    display: inline-block;
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    float: right;
  }

  .nav > .nav-links > span {
    display: inline-block;
    padding: 20px 50px 20px 10px;
    text-decoration: none;
    cursor: pointer;
  }

  .nav > .nav-links > span:hover {
    color: ${colors.primaryColor};
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 600px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 5px;
    }
    .nav > .nav-links > span {
      display: block;
      height: 15px;
      width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: fit-content;
      overflow-y: auto;
    }
  }
`;
