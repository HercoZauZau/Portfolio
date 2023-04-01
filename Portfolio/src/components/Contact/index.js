import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SiInstagram, SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { Element } from 'react-scroll';

import { Form, Social, Main } from './styled';

export default function Contact() {
  return (
    <Element name="contact">
      <Main>
        <Form
          action="https://api.web3forms.com/submit"
          method="POST"
          class="form"
        >
          <input
            type="hidden"
            name="access_key"
            value="f1554689-4233-43d4-bf48-82963a50b682"
          />

          <h3>CONTACT ME</h3>

          <input type="text" name="name" required placeholder="Name" />

          <input type="email" name="email" required placeholder="Email" />

          <textarea name="message" required placeholder="Message" />

          <button type="submit">Submit</button>
        </Form>

        <Social>
          <p>Get in touch</p>

          <div>
            <FaMapMarkerAlt />
            <span>Maputo, Mozambique</span>
          </div>

          <div>
            <FaPhoneAlt />
            <span>+258 842193531</span>
          </div>

          <div>
            <FaEnvelope />
            <span>zauzauherco@gmail.com</span>
          </div>

          <div className="socialNetworks">
            <a href="https://github.com/HercoZauZau">
              <SiGithub />
            </a>

            <a href="https://mz.linkedin.com/in/hercozauzau">
              <SiLinkedin />
            </a>

            <a href="https://instagram.com">
              <SiInstagram />
            </a>

            <a href="https://wa.me/258842193531">
              <SiWhatsapp />
            </a>
          </div>
        </Social>
      </Main>
    </Element>
  );
}
