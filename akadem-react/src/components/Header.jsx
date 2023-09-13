import React from 'react'
import logo from './logo.svg'

function Header() {
  return (
    <div>
            <header class="header">
        <div class="container header__container">
          <a href="#" class="header__logo">
            <img src={logo} />
          </a>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#" class="nav__link active">Bosh sahifa</a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">Kitoblar</a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">Aksiyalar</a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">Kontaktlarh</a>
              </li>

              <li class="nav__item">
                <a href="#" class="main-link">Ro'yhatdan otish</a>
              </li>

            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header