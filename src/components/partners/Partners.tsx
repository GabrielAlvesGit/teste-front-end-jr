import React from "react";
import Parceiros from "../../assets/img/parceiros.jpg";
import "./partners.css";

const Partners = () =>{
    return(
        <section className="partners">
            <div className="partners__container">
               <div className="partners-group">
                  <div className="container__img">
                    <img className="partner__image" src={Parceiros} alt="Parceiros" />
                    <div className="partner__content-texts">
                      <h4 className="partner__title">Parceiros</h4>
                      <p className="partner__description">Lorem ipsum dolor sit amet, consectetur</p>
                      <button className="partner__button">Confira</button>
                    </div>
                  </div>

                  <div className="container__img">
                    <img className="partner__image" src={Parceiros} alt="Parceiros" />
                    <div className="partner__content-texts">
                      <h4 className="partner__title">Parceiros</h4>
                      <p className="partner__description">Lorem ipsum dolor sit amet, consectetur</p>
                      <button className="partner__button">Confira</button>
                    </div>
                  </div>
               </div>

               <div className="partners__group-title">
                <h3>Produtos relacionados
                      <span className="line"></span>
                </h3>
                <span className="partners__link">Ver todos</span>
               </div>
               
                <div className="partners-group">
                  <div className="container__img">
                    <img className="partner__image" src={Parceiros} alt="Parceiros" />
                    <div className="partner__content-texts">
                      <h4 className="partner__title">Parceiros</h4>
                      <p className="partner__description">Lorem ipsum dolor sit amet, consectetur</p>
                      <button className="partner__button">Confira</button>
                    </div>
                  </div>

                  <div className="container__img">
                    <img className="partner__image" src={Parceiros} alt="Parceiros" />
                    <div className="partner__content-texts">
                      <h4 className="partner__title">Parceiros</h4>
                      <p className="partner__description">Lorem ipsum dolor sit amet, consectetur</p>
                      <button className="partner__button">Confira</button>
                    </div>
                  </div>
               </div>
            </div>
        </section>
    )
}

export default Partners;