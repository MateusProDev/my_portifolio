// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

// import ApiData from './components/ApiData';

// Componentes para diferentes rotas
const Home = () => <div>
  <MainContainer />
</div>;
const About = () => 
<div>
  
</div>;
const Contact = () => <div>Contact</div>;
const Avaliações = () => <div>
  
</div>;


// Componente principal da aplicação
const App = () => {
  return (
    <>
      <Router>
      <div>
        {/* Barra de navegação */}
        <NavBar />

        {/* Definição de rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Avaliações" element={<Avaliações />} />
        </Routes>
      </div>
      </Router>
    </>
  );
};

export default App;
