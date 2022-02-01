import './App.css';
import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-yellow-300 w-full h-full absolute  mx-auto px-8 ">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
