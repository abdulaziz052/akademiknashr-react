import React from 'react'
import book from './python-book.png'

function Hero() {
  return (
    <>
          <section class="hero">
        <div class="container hero__container">
          <div class="hero__info">
            <hr class="line hero__line"/>
              <h1 class="hero__title">Pythonda dasturlash
                asoslari</h1>

              <p class="hero__text">Dasturlash asoslariga oid o‘zbek tilidagi ilk eng <br/> mukammal qo‘llanma.
                Kitobning har bir bo‘limi <br/> uchun maxsus video darslar yozilgan bo‘lib, ularga <br/> kitobda
                  ko‘rsatilgan QR kod orqali o‘tish mumkin.</p>
                  <a href="#" class="main-link ">Buyurtma berish</a>
                </div>
                <img class="hero__img" alt="banner" width="510" src={book}/>
                </div>

              </section>
    </>
  )
}

export default Hero