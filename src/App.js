import React from 'react';
import './App.css';

import Header from './Component/Header/Header';
import CarouselContainer from './Component/CarouselContainer/CarouselContainer';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';



function App() {

  return (
    <div className="App">
      <Header />
      <CarouselContainer />
      <div className="div-main">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
