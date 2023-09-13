import React from 'react'
import telegram from './icon-telegram.png'
import facebook from './icon-facebook.png'
import instagram from './icon-instagram.png'
import logo from './logo.svg'


function Akadem() {
  return (
    <div>  <section className="akadem">
    <div className="container akadem__container">
      <div className="akadem__info">
        <a href="#">
          <img className="akadem__info__img" src={logo} />
        </a>
        <div className="akadem__info__img">
          <a href="#">
          <img className="img__o" width="24px" height="24px" src={telegram} />
          </a>
          <a href="#">
            <img className="img__o" width="24" height="24" src={facebook} />
          </a>
          <a href="#">
              <img className="img__o" width="24" height="24" src={instagram} />
          </a>
              </div>
            </div>
            <hr className="akadem__line"/>
              <div className="flex">

                <div className="list__1">
                  <ul className="akadem__list">
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Bosh sahifa
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Kitoblar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Aksiyalar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Yangiliklar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Kontaktlar
                    </a></li>
                  </ul>
                </div>
                <div className="list__2">
                  <ul className="akadem__list">
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      ilmiy nashrlar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Ilmiy-ommabop nashrlar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Ma’rifiy nashrlar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Lug’atlar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Adabiy-badiiy nashrlar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Abituriyentlar uchun
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Bolalar uchun
                    </a></li>
                  </ul>
                </div>
                <div className="list__3">
                  <ul className="akadem__list">
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Ko’p so’raladigan savollar
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Yetkazib berish haqida
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      To’lov usullari haqida
                    </a></li>
                  </ul>
                </div>
                <div className="list__4">
                  <ul className="akadem__list">
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Bo’sh ish o’rinlari
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Biz bilan bog’lanish
                    </a></li>
                    <li className="akadem__item"><a className="akadem__link" href="#">
                      Maxfiylik nizomi
                    </a></li>
                  </ul>
                </div>
              </div>

            </div>
          </section>
          </div>
  )
}

export default Akadem