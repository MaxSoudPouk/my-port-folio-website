﻿import { useState } from "react";
import "./header.css";

function Header() {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  })

  /*================= Toggle Menu =================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, serActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Max
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => serActiveNav('#home')}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => serActiveNav('#about')}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => serActiveNav('#skills')}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" onClick={() => serActiveNav('#services')}
                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" onClick={() => serActiveNav('#portfolio')}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => serActiveNav('#contact')}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps "></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
