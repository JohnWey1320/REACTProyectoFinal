import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  return (
    <>

      <BrowserRouter>
        <CartProvider value='Pablo'>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/lista/:listaid' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleid' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>

  );
}

export default App;
