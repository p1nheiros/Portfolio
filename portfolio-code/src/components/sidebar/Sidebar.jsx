import React, { useState } from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo-p-1.png"

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i class="fa-solid fa-house"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                <i class="fa-solid fa-bullseye"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i class="fa-solid fa-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                <i class="fa-solid fa-code"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i class="fa-solid fa-graduation-cap"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i class="fa-solid fa-comments"></i>
                </a>
              </li>

            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">2023 &copy; Lucas Pinheiro</span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </>
  );
};

export default Sidebar;