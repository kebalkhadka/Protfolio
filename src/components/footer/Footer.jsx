import React from 'react';
import './Footer.css'
import { FaFacebook,FaLinkedinIn,FaInstagram, FaGithub } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { GitHub } from '@mui/icons-material';
import { GiThunderBlade } from 'react-icons/gi';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="copyright">
              © 2024 Kebal khadka. All rights reserved.
            </p>
            <ul className="social-links">
          <li>
            <a href={Bio.facebook} target='_blank'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href={Bio.github}>
              <FaGithub target='_blank' />
            </a>
          </li>
          <li>
            <a href={Bio.linkedin}>
              <FaLinkedinIn target='_blank'/>
            </a>
          </li>
          <li>
            <a href={Bio.instagram} target='_blank'>
              <FaInstagram />
            </a>
          </li>
        </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;