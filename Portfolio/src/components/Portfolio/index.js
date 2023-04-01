import React from 'react';
import { Element } from 'react-scroll';

import { Main } from './styled';

export default function Portfolio() {
  return (
    <Element name="portfolio">
      <Main>
        <div className="main">
          <div className="col">
            <h5>Education</h5>

            <div className="bottom-bar" />

            <div className="col-content primary-bg">
              <div className="content">
                <span>2016-2019</span>

                <h6>Accounting</h6>

                <p>I.C.M.</p>
              </div>

              <div className="content">
                <span>2020</span>

                <h6>Human Formation</h6>

                <p>MUVA</p>
              </div>

              <div className="content">
                <span>2021-Now</span>

                <h6>Computer Science</h6>

                <p>Eduardo Mondlane University</p>
              </div>
            </div>
          </div>
          <div className="col skill-col">
            <h5>Skills</h5>

            <div className="bottom-bar" />

            <div className="col-content">
              <div className="skill">
                <h6>MERN Stack</h6>

                <div className="skill-bar" style={{ width: '95%' }}>
                  <p>95%</p>
                </div>
              </div>

              <div className="skill">
                <h6>Typescript</h6>

                <div className="skill-bar" style={{ width: '90%' }}>
                  <p>90%</p>
                </div>
              </div>

              <div className="skill">
                <h6>Java</h6>

                <div className="skill-bar" style={{ width: '78%' }}>
                  <p>78%</p>
                </div>
              </div>

              <div className="skill">
                <h6>Python</h6>

                <div className="skill-bar" style={{ width: '85%' }}>
                  <p>85%</p>
                </div>
              </div>

              <div className="skill">
                <h6>UI/UX</h6>

                <div className="skill-bar" style={{ width: '88%' }}>
                  <p>88%</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="img"
          />
        </div>
      </Main>
    </Element>
  );
}
