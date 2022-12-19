import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Inicio } from "./Inicio/index";
import { ProductosLista } from './productos/index';

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<ProductosLista />} />
      </Routes>
  )
}

