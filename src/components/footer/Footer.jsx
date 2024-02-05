import React from "react";
import Fecebook from "../../assets/img/facebook.svg";
import Youtube from "../../assets/img/youtube.svg";
import Instagram from "../../assets/img/instagram.svg";
import FormPagamentos from "../../assets/img/formas_pagamento.svg";
import Vtex from "../../assets/img/vtxwhite.svg"
import Econverse from "../../assets/img/econverse.svg"
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__flex">
        <div className="footer__container">
          <div className="menu__sobre">
            <li className="common-title"><a href="#">Sobre nós</a></li>
            <ul className="list__footer">
              <li className="footer__item"><a href="#">CONHEÇA</a></li>
              <li className="footer__item"><a href="#">COMO COMPRAR</a></li>
              <li className="footer__item"><a href="#">INDICAÇÃO E DESCONTO</a></li>
            </ul>

            <ul className="footer__social">
              <li><a href="#"><img src={Fecebook} alt="" /></a></li>
              <li><a href="#"><img src={Youtube} alt="" /></a></li>
              <li><a href="#"><img src={Instagram} alt="" /></a></li>
            </ul>
          </div>

          <div className="menu__informacoes">
            <li className="common-title"><a href="#">INFORMAÇÕES ÚTEIS</a></li>
            <ul className="list__footer">
              <li className="footer__item"><a href="#">FALE CONOSCO</a></li>
              <li className="footer__item"><a href="#">DÚVIDAS</a></li>
              <li className="footer__item"><a href="#">PRAZOS DE ENTREGA</a></li>
              <li className="footer__item"><a href="#">FORMAS DE PAGAMENTO</a></li>
              <li className="footer__item"><a href="#">POLÍTICA DE PRIVACIDADE</a></li>
              <li className="footer__item"><a href="#">TROCAS E DEVOLUÇÕES</a></li>
            </ul>
          </div>

          <div className="menu__formasPag">
            <li className="common-title"><a href="">FORMAS DE PAGAMENTO</a></li>
            <ul>
              <ul>
                <li>
                  <a href="#"><img src={FormPagamentos} alt="Formas de Pagamentos"/></a>
                </li>
              </ul>
            </ul>
          </div>

          <div className="email__container">
            <h4>CADASTRE-SE E RECEBA NOSSAS</h4>
            <span>NOVIDADES E PROMOÇÕES</span>

            <p>Excepteur sint occaecat cudatat non ent, sunt in 
              culpa qui officia lorem ipsum 
            </p>

            <div className="email__container-input">
              <input className="email__input" placeholder="Seu e-mail"></input> 
              <button className="email__button">OK</button>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="copyright__container">
        <div className="copyright">
          <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <span> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</span>  
         </p>

          <ul className="copyright__img">
            <li><a href=""><img src={Vtex} alt="Vtex" /></a></li>
            <li><a href=""><img src={Econverse} alt="Econverse" /></a></li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Footer;
