import React from 'react'
import logo from './logo.svg'

function Header() {
  return (
    <div>
            <header className="header">
        <div className="container header__container">
          <a href="#" className="header__logo">
            <img src={logo} />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link active">Bosh sahifa</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Kitoblar</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Aksiyalar</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Kontaktlarh</a>
              </li>

              <li className="nav__item">
                <a href="#" className="main-link">Ro'yhatdan otish</a>
              </li>

            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header