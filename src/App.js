import React from "react";
import { Header } from "./components/Header";
import { AppRouter } from "./components/AppRouter";
import { DataProvider } from "./context/Dataprovider";
import "boxicons";
import { Carrito } from "./components/Carrito";
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Carrito />
        <AppRouter />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
