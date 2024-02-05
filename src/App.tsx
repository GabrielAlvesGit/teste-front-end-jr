import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Category from './components/home/Category';
import RelatedProducts from './components/related-products/RelatedProducts';
import Partners from './components/partners/Partners';
import Brands from './components/nav-brands/Brands';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <>
          <Header />
          <Home />
          <Category />
          <RelatedProducts />
          <Partners />
          <Brands />
          <Footer />
      </>
  );
};

export default App;