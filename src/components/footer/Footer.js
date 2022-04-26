import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-cover">
          <div className="copyright">
            Copyright &copy; 2022 Capstone 14 group
          </div>
          <div className="social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-telegram-plane"></i>
          </div>
          <div className="privacy text-light">
            Privacy Policy | Terms of Use
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer