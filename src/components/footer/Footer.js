import React from "react";
import { Link } from "react-router-dom";

import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { routes, DISPLAY_STATES, routesFilter } from "../../helpers/routes";
import "./footer.css";

const Footer = ({ state }) => {
  const { user } = state;

  let routesForSiteMap = routesFilter(user, routes, DISPLAY_STATES);

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='info'>
          <h4>BFB-Big Freelance Bord</h4>
          <li> 972-2-6247149</li>
          <li>Jerusalem</li>
          <li>18 Haoman</li>
        </div>
        <div className='links-container'>
          <h4>Site Map</h4>

          {routesForSiteMap.map((route, index) => {
            return (
              <Link key={index} to={route.to} as={route.as}>
                {route.name}
              </Link>
            );
          })}
        </div>
        <div className='links-container'>
          <h5>Social Media</h5>

          <a href='https://github.com/' target='_blank'>
            {" "}
            <BsGithub />
          </a>

          <a href='https://linkedin.com/'>
            <BsLinkedin />
          </a>

          <a href='https://instagram.com/'>
            <BsInstagram />
          </a>

          <a href='https://twitter.com/'>
            <BsTwitter />
          </a>
        </div>
      </div>

      <div className='footer-bottom'>
        © 2021 Copyright:
        <a
          href='https://github.com/KobySindy/React-Front-End-Business-Cards-App.git'
          target='_blank'>
          Koby Sindy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
