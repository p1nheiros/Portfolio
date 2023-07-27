import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/inicio/Home';
import About from './components/sobre/About';
import Services from './components/servicos/Services';
import Resume from './components/resumo/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/preco/Pricing';
import Testimonials from './components/testemunhas/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contato/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
