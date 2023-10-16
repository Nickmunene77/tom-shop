import React from "react";
import "./Footer.scss";
import logo from "../../img/logo.png";
import instagram from "../../img/icons/instagram.svg";
import facebook from "../../img/icons/facebook.svg";
import telegram from "../../img/icons/telegram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <a href="/" className="footer-logo">
          <img src={logo} alt="logo" />
          <p className="footer-logo__title">
            <span>Furniture</span> from FurniFashion
          </p>
        </a>
        <ul className="menu-footer">
          <li className="menu-footer__item">
            <a href="/">Home</a>
          </li>
          <li className="menu-footer__item">
            <a href="/#">About Us</a>
          </li>
          <li className="menu-footer__item">
            <a href="/#">Products</a>
          </li>
        </ul>
        <ul className="footer-social">
          <li className="footer-social__item">
            <a href="/">
              <img src={instagram} alt="Link to Instagram" />
              <span>Instagram</span>
            </a>
          </li>
          <li className="footer-social__item">
            <a href="/">
              <img src={telegram} alt="Link to Telegram" />
              <span>Telegram</span>
            </a>
          </li>
          <li className="footer-social__item">
            <a href="/">
              <img
                src={facebook}
                width={28}
                height={28}
                alt="Link to Facebook"
              />
              <span>Facebook</span>
            </a>
          </li>
        </ul>
        <div className="footer-info">
          <p>Prisons, Ruiru Kenya</p>
          <p>+254 718140675</p>
          <p>nickmunene69@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
