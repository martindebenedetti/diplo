import {BrowserRouter,Routes,Route} from "react-router-dom";
// import './App.css';
// import React from 'react';
import Header from './componentes/layouts/Header';
import Nav from './componentes/layouts/Nav';
import Footer from './componentes/layouts/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from "./pages/ServiciosPage";





function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nosotros" element={<NosotrosPage />}/>
      <Route path="/servicios" element={<ServiciosPage />}/>
      <Route path="/novedades" element={<NovedadesPage />}/>
      <Route path="/contacto" element={<ContactoPage />}/>
      
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
