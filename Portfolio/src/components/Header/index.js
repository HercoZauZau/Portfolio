/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Element } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

import { Container } from './styled';

export default function Header() {
  const [cursorState, setCursorState] = React.useState(false);

  return (
    <Element name="home">
      <Container>
        <div id="masthead-wrapper">
          <div className="masthead-content-wrapper">
            <div className="title-container">
              <h2>
                <span className="title-greet">
                  <span>Hi. I'm</span>
                  <span className="title-name">Hérco ZauZau</span>
                </span>

                <div />

                <Typewriter
                  words={['Programmer', 'Freelancer', 'Accountant']}
                  loop={false}
                  cursor
                  cursorBlinking={cursorState}
                  typeSpeed={100}
                  deleteSpeed={100}
                  onDelay={() => {
                    setCursorState(true);
                  }}
                  onType={() => {
                    setCursorState(false);
                  }}
                  onDelete={() => {
                    setCursorState(false);
                  }}
                />
              </h2>

              <p>
                I am a fullstack developer from Maputo, with a strong focus in
                MERN stack. You can check my projects on this website.
              </p>
            </div>
            <img
              src="https://github.com/HercoZauZau/Portfolio/blob/main/Portfolio/src/assets/img/cover.png?raw=true"
              alt="img"
            />
          </div>
        </div>
      </Container>
    </Element>
  );
}
