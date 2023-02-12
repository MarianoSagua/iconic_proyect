import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getAllProducts } from '../Api';
import Loader from './Loader';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () =>{
    const data = await getAllProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(()=>{
      getProducts();
  }, []);

  return (
    <div>
      <ItemDetail 
        titulo={products.title} 
        imagen={products.images} 
        precio={products.price} 
        descripcion={products.description} 
        id={products.id}
      />
    </div>
  )
}

export default ItemDetailContainer