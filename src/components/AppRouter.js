import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Duelo } from './Blog/Duelo';
import { Problemas } from "./Blog/Problemas";
import { Divorcio } from "./Blog/Divorcio";
import { Bullying } from "./Blog/Bullying";
import { Confundido } from "./Blog/Confundido";
import { Podcast } from "./Podcast";
import { Contacto } from './Contacto';
import { Footer } from './Footer/Footer';
import { Header } from './Header';
import { Inicio } from "./Inicio/index";
import { ProductosLista } from './productos/index';

export const AppRouter = () => {
  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<ProductosLista />} />
        <Route path="/Duelo" element={<Duelo />}/>
        <Route path="/Problemas" element={<Problemas />}/>
        <Route path="/Divorcio" element={<Divorcio />}/>
        <Route path="/Bullying" element={<Bullying />}/>
        <Route path="/Confundido" element={<Confundido />}/>
        <Route path="/Podcast" element={<Podcast />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        
      </Routes>
      <Footer/>
  </>
  )
}

