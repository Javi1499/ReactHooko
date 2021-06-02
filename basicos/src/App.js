import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
function App() {
  //Listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Gorra', precio: 40 },
    { id: 3, nombre: 'Short', precio: 40 },
    { id: 4, nombre: 'Tenis', precio: 70 }
  ]);
  //Stata para carrito de compras
  const [carrito, setCarrito] = useState([])

  //Obtener fecha
  const fecha = new Date().getFullYear();
  return (
    <div className="App">
      <Header
        titulo="Tienda virtual"
        numero="20"
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
          productos={productos}
        />
      ))}
      <Carrito
      carrito={carrito}
      setCarrito={setCarrito}
      />
      <Footer
        fecha={fecha}
      />
    </div>
  );
}

export default App;
