import React from 'react'
import ItemListContainer from './ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";

const Main = () => {
  return (
    <div className='containerMain'>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/productos/:categoria' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </div>
  )
}

export default Main; 