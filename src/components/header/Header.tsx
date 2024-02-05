import React from "react";
/* ====== Icons ====== */
import ShieldCheckIcon from '../../assets/icons/ShieldCheck.svg';
import CreditCard from '../../assets/icons/CreditCard.svg';
import Truck from '../../assets/icons/Truck.svg';
import Search from '../../assets/icons/Search.svg';
import Box from '../../assets/icons/Box.svg';
import HeaderIcon from '../../assets/icons/Heart.svg';
import UserCircle from '../../assets/icons/UserCircle.svg';
import ShoppingCart from '../../assets/icons/ShoppingCart.svg';
import CrownSimple from '../../assets/icons/CrownSimple.svg';
import Logo from '../../assets/img/logo.png'; 
import "./header.css";


const Header = () =>{
    return(
        <header className="header">
          <ul className="main__NavList">
            <li className="main__NavItem">
              <div className="main__icon">
                <img src={ShieldCheckIcon} alt="Shield Check" />
              </div>
              <a href="#">Compra<span> 100% segura</span></a>
            </li>
            <li className="main__NavItem">
              <div className="main__icon">
                <img src={Truck} alt="Truck" />
              </div>
              <a href="#"><span>Frete grátis </span>acima de R$ 200</a>
            </li>
            <li className="main__NavItem">
              <div className="main__icon">
                <img src={CreditCard} alt="CreditCard" />
              </div>
              <a href="#"><span>Parcele</span> suas compras</a>
            </li>
          </ul>

          <section className="header__content">
            <div className="logo__container">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="search__bar">
              <input type="search" placeholder="O que você está buscando?" className="search-input" />
              <img className="search-icon" src={Search} alt="Search Icon" />
            </div>

            <div className="menu__group">
              <ul className="menu-group__List" >
                <li className="menu-group__icon">
                  <a href=""><img src={Box} alt="Box" /></a>
                </li>
                <li className="menu-group__icon">
                  <a href=""><img src={HeaderIcon} alt="Header Icon" /></a>
                </li>
                <li className="menu-group__icon">
                  <a href=""><img src={UserCircle} alt="User Circle" /></a>
                </li>
                <li className="menu-group__icon">
                  <a href=""><img src={ShoppingCart} alt="Shopping Cart" /></a>
                </li>
              </ul>
            </div>
          </section>

          <nav className="categorias__nav">
              <ul className="lista__categorias">
                <li className="categoria__item"><a href="#">Todas Categorias</a></li>
                <li className="categoria__item"><a href="#">Supermercado</a></li>
                <li className="categoria__item"><a href="#">Livros</a></li>
                <li className="categoria__item"><a href="#">Moda</a></li>
                <li className="categoria__item"><a href="#">Lançamentos</a></li>
                <li className="categoria__item">
                  <a href="#">
                    <span>Ofertas do dia</span>
                    </a>
                </li>
                <li className="categoria__item">
                  <a href="#">
                    <div className="main__icon">
                      <img src={CrownSimple} alt="CrownSimple" />
                      Assinatura
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
        </header>
    );       
}

export default Header;