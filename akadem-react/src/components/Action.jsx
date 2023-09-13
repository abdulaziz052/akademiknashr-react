import React from 'react'
import sale from './sale-img.png'

function Action() {
  return (
    <div>
          <section className="action">
                <div className="container action__container">
                  <div className="action__info">
                    <h2 className="action__title">Bolalar kitoblari uchun
                      ajoyib aksiya!</h2>
                    <p className="action__text">Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun turli mashq
                      qo’llanmalari va komikslar.</p>
                    <p className="action__text__two">Aksiyadagi eng katta to’plamda <span>50 ta kitob</span>ni <span>350
                      ming</span> so’mga (aslida 383 ming so’m) sotib olishingiz mumkin.</p>
                    <a href="#" className="main-link">Buyurtma berish</a>
                  </div>
                  <img className="action__img" src={sale} />
                </div>
              </section>
    </div>
  )
}

export default Action