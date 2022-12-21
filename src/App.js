import React from "react";
import { AppRouter } from "./components/AppRouter";
import { DataProvider } from "./context/Dataprovider";
import "boxicons";
import { Carrito } from "./components/Carrito";



function App() {
  return (
    <DataProvider>

      <div className="App">
        <Carrito />
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
