import React, { useState } from "react";
import Vtex from "../../assets/img/vtex.png";
import "./brands.css";

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfBrands = 8; 
  const cardsToShow = 5; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfBrands);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numberOfBrands) % numberOfBrands);
  };

  const visibleBrands = [];

  for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {
    const indexToShow = i % numberOfBrands;
    visibleBrands.push(indexToShow);
  }

  return (
    <section className="brands">
      <div className="brands__group-title">
        <h3>Navegue por marcas</h3>
      </div>

      <div className="brands__nav">
        <ul className="lista__brands">
          {visibleBrands.map((index) => (
            <li key={index} className="brands__item">
              <a href="#">
                <img src={Vtex} alt={`Vtex ${index}`} />
              </a>
            </li>
          ))}
        </ul>

        <div className="carousel__buttons-brands">
          {currentIndex > 0 && (
            <button className="carousel__button-brands" onClick={handlePrev}>
              {"<"}
            </button>
          )}

          <div className="flex">
            <button className="carousel__button-brands" onClick={handleNext}>
              {">"}
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Brands;
