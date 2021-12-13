import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <div className='footer-top'>
        <p>Here you can organize your footer content.</p>
      </div> */}
      <div className='footer-midlle'>
        <div className='footer-left-box'>
          <h3>Some content</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            reiciendis. Numquam consequatur quisquam, officiis voluptatum
            officiis dolorum.
          </p>
        </div>
        <div className='footer-right-box'>
          <div className='links-container'>
            <h5>Links</h5>
            <a href='#!'>Link 1</a>
            <a href='#!'>Link 2</a>
            <a href='#!'>Link 3</a>
            <a href='#!'>Link 4</a>
          </div>
          <div className='links-container'>
            <h5>Links</h5>

            <a href='#!'>Link 1</a>

            <a href='#!'>Link 2</a>

            <a href='#!'>Link 3</a>

            <a href='#!'>Link 4</a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        © 2021 Copyright:
        <a href='#'> Koby Sindy</a>
      </div>
    </footer>
  );
};

export default Footer;
