import React from "react";
import Monitorar from '../../assets/img/monitorar-tablet-e-smartohone.png';
import Supermercado from '../../assets/img/supermercados.png';
import Bebida from '../../assets/img/whiskey.png';
import Ferramenta from '../../assets/img/ferramentas.png';
import Saude from '../../assets/img/cuidados-de-saude.png';
import Esporte from '../../assets/img/corrida.png';
import Moda from '../../assets/img/moda.png';
import "./home.css";

const Category = () =>{

  return(
    <section className="Category">
      <ul className="category__products-list">
        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Monitorar} alt="Monitor"/>
          </div>
          <h2><span>Tecnologia</span></h2>
        </li>

        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Supermercado} alt="Supermercado"/>
          </div>
          <h2>Supermercado</h2>
        </li>

        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Bebida} alt="Bebida "/>
          </div>
          <h2>Bebidas</h2>
        </li>

        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Ferramenta} alt="Ferramenta"/>
          </div>
          <h2>Ferramentas</h2>
        </li>

        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Saude} alt="Saude"/>
          </div>
          <h2>Saúde</h2>
        </li>

        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Esporte} alt="Esporte"/>
          </div>
          <h2>Esportes e Fitness</h2>
        </li>

        <li className="category__products-list-item">
          <div className="category__products-list-img">
            <img src={Moda} alt="Moda"/>
          </div>
          <h2>Moda</h2>
        </li>
      </ul>
    </section>
)
}

export default Category;


