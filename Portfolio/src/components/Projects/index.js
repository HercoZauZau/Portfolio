import React from 'react';
import { Element } from 'react-scroll';

import { Main } from './styled';

export default function Projects() {
  return (
    <Element name="projects">
      <Main>
        <h2>Projects</h2>

        <div className="circle" />

        <div className="p-list">
          <ol>
            <li>
              <img
                src="https://raw.githubusercontent.com/HercoZauZau/Gestor-De-Dados--frontend/main/screenshots/gdc(3).png"
                alt="img"
              />

              <h3>Data Manager</h3>

              <p>React project for data management using REST API</p>

              <div className="links">
                <a target="blank" href="#">
                  <button className="f-bt" type="button">
                    Live Demo
                  </button>
                </a>

                <a
                  target="blank"
                  href="https://github.com/HercoZauZau/Gestor-De-Dados--frontend"
                >
                  <button type="button">View GitHub</button>
                </a>
              </div>
            </li>

            <li>
              <img
                src="https://github.com/HercoZauZau/Github-Profile-Searcher/blob/main/screenshots/img(1).png?raw=true"
                alt="img"
              />

              <h3>Github Profile Searcher</h3>

              <p>Github user search engine developed with the GitHub API</p>

              <div className="links">
                <a target="blank" href="https://ghsearcher.netlify.app/">
                  <button className="f-bt" type="button">
                    Live Demo
                  </button>
                </a>

                <a
                  target="blank"
                  href="https://github.com/HercoZauZau/Github-Profile-Searcher"
                >
                  <button type="button">View GitHub</button>
                </a>
              </div>
            </li>

            <li>
              <img
                src="https://github.com/HercoZauZau/LANDZA/blob/main/screenshots/img(3).png?raw=true"
                alt="img"
              />

              <h3>School Manager</h3>

              <p>Online management of school data</p>

              <div className="links">
                <a target="blank" href="#">
                  <button className="f-bt" type="button">
                    Live Demo
                  </button>
                </a>

                <a target="blank" href="https://github.com/HercoZauZau/LANDZA">
                  <button type="button">View GitHub</button>
                </a>
              </div>
            </li>

            <li>
              <img
                src="https://github.com/HercoZauZau/jogodavelha/blob/main/imagens/Screenshot%20(87).png?raw=true"
                alt="img"
              />

              <h3>Tic Tac Toe Game</h3>

              <p>Come play tic tac toe online</p>

              <div className="links">
                <a target="blank" href="https://jogovelha.netlify.app/">
                  <button className="f-bt" type="button">
                    Live Demo
                  </button>
                </a>

                <a
                  target="blank"
                  href="https://github.com/HercoZauZau/JogoDaVelha"
                >
                  <button type="button">View GitHub</button>
                </a>
              </div>
            </li>

            <li>
              <img
                src="https://raw.githubusercontent.com/HercoZauZau/agenda-de-contactos/main/images/screenshots/img(8).png"
                alt="img"
              />

              <h3>Contact Book</h3>

              <p>Online contact management</p>

              <div className="links">
                <a target="blank" href="#">
                  <button className="f-bt" type="button">
                    Live Demo
                  </button>
                </a>

                <a
                  target="blank"
                  href="https://github.com/HercoZauZau/agenda-de-contactos"
                >
                  <button type="button">View GitHub</button>
                </a>
              </div>
            </li>

            <li>
              <img
                src="https://raw.githubusercontent.com/HercoZauZau/Gestor-De-Dados--frontend/main/screenshots/gdc(4).png"
                alt="img"
              />

              <h3>Data Manager (API)</h3>

              <p>REST API for data management</p>

              <div className="links">
                <a target="blank" href="#">
                  <button className="f-bt" type="button">
                    Live Demo
                  </button>
                </a>

                <a
                  target="blank"
                  href="https://github.com/HercoZauZau/API-REST--alunos"
                >
                  <button type="button">View GitHub</button>
                </a>
              </div>
            </li>
          </ol>
        </div>
      </Main>
    </Element>
  );
}
