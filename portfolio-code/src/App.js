import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/inicio/Home';
import Sobre from './components/sobre/Sobre';
import Skills from './components/habilidades/Skills';
import Servicos from './components/servicos/Servicos';
import Portfolio from './components/portfolios/Portfolio';
import Qualificacao from './components/qualificacao/Qualificacao';
import Contato from './components/contato/Contato';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <Sobre />
        <Skills />
        <Servicos />
        <Portfolio />
        <Qualificacao />
        <Contato />
      </main>
    </>
  );
}

export default App;
