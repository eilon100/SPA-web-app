import React from 'react';
import About from './components/about/About';
import Home from './components/homePage/Home';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu/Menu';

function App() {
  return (
    <Router>
      <div className="h-screen">
        <NavBar />
        <section className="h-full" id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="contact">
          <About />
        </section>
      </div>
    </Router>
  );
}

export default App;
