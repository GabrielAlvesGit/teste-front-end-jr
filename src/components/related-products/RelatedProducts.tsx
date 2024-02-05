import React, { useState } from "react";
import "./relatedProducts.css";
import { productsData, productsDataNav } from "./productsData";

interface Product {
  productName: string;
  photo: string;
  descriptionShort: string;
  price: number;
  category: string;
}

const RelatedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const showDetails = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % productsData.products.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + productsData.products.length) % productsData.products.length);
  };

  const formatPrice = (price: number) => {
    const formattedPrice = (price / 10).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return formattedPrice.replace(/\s/g, ''); 
  };
  
  const calculateTotalPrice = () => {
    if (selectedProduct) {
      return selectedProduct.price * quantity;
    }
    return 0;
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <section className="related__products">
      <h3>
        Produtos relacionados
        <span className="line"></span>
      </h3>

      <nav className="related__products-nav">
        <ul className="lista__related-products">
          {productsDataNav.map((item, index) => (
            <li
              key={index}
              className={`related__products-item ${item.name === 'celular' ? 'celular-item' : ''}`}
            >
              <a href="">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {selectedProduct && (
      <div className="product-details">
          <>
          <div className="product__details-container">
            <div className="product__details-img">
              <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            </div>
            <div className="product__details-item">
              <button className="closeDetails" onClick={closeDetails}>X</button>
                <h3>{selectedProduct.productName}</h3>
                  <div className="price-container">
                    <p className="additional__descriptionShort">{selectedProduct.descriptionShort}</p>
                    <span className="price">R$ {formatPrice(calculateTotalPrice())}</span>
                    <p className="additional__text">Many desktop publishing packages and web page editors now many desktop publishing</p>
                    <span className="additional__VejaMais"><a href="">Veja mais detalhes do produto {">"}</a></span>
              
                    {/* Quantidade de produtos */}
                    <div className="quantity-container">
                      <button className="quantity-button" onClick={decrementQuantity}>-</button>
                      <span className="quantity">{quantity}</span>
                      <button className="quantity-button" onClick={incrementQuantity}>+</button>
                    </div>

                    <button className="card__price-buy">Comprar</button>
                  </div>
            </div>
          </div>
          </>
      </div>
      )}

      <div className="product-list">
        {productsData.products
          .filter(product => !selectedProduct || product.category === selectedProduct.category)
          .slice(startIndex, startIndex + 4)
          .map((product, index) => (
            <div key={index} className="product-card" onClick={() => showDetails(product)}>
              <img src={product.photo} alt={product.productName} />
              <p className="product__card-description">{product.descriptionShort}</p>
              <div className="price__container">
                <span className="card__price-productName">{product.productName}</span>
                <span className="card__price-discountPrice">R${product.originalPrice}</span>
                <span className="card__price-discount">R${product.discountPrice}</span>
                <span className="card__price-installment">{product.installment}</span>
                <span className="card__price-freight">Frete grátis</span>
                <button className="card__price-buy" >Comprar</button>
              </div>
            </div>
          ))}
      </div>

      <div className="carousel-buttons">
        <button className="carousel-button" onClick={handlePrev}>
          {"<"}
        </button>
        <button className="carousel-button" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </section>
  );
};

export default RelatedProducts;