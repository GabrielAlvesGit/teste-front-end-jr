import React from "react";
import Promocao from '../../assets/img/promocao.png';

import "./home.css";

const Home = () =>{
    return(
        <section className="home">
            <div className="promotion__container">
                <img src={Promocao} alt="Promoção"/>
            <div className="text__promotion">
                <h1>Venha conhecer nossas<span>promoções</span></h1>
                <p>50% Off nos produtos </p>
                <button>Ver produto</button>
            </div>
            </div>
        </section>
    )
}

export default Home;