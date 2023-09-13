import React from 'react'
import img1 from './icon1.png'
import img2 from './icon2.png'
import img3 from './icon3].png'
function Aynan() {
  return (
    <div>
          <section class="aynan">
                  <div class="container">
                    <hr class="aynan__line"/>
                      <h2 class="aynan__title">Nega aynan <br/>
                        Akademnashr?</h2>
                      <div class="info__aynan">
                        <div class="card">
                          <img class="icon1" src={img1} />
                            <h3 class="card__title">Oson buyurtma qilish</h3>
                            <p class="card__text">Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda buyurtma qila
                              olasiz.</p>
                        </div>

                        <div class="card">
                          <img class="icon1" src={img2} />
                            <h3 class="card__title">Eng sara kitoblar</h3>
                            <p class="card__text">Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil janrdagi
                              kitoblarni topa olasiz.</p>
                        </div>

                        <div class="card">
                          <img class="icon1" src={img3} />
                            <h3 class="card__title">Tez yetkazib berish</h3>
                            <p class="card__text">O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro buyurtmalarni 10
                              ish kuni ichida yetkazib beriladi.</p>
                        </div>
                      </div>
                  </div>
              </section>
    </div>
  )
}

export default Aynan