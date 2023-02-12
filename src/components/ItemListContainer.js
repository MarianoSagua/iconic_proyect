import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Api';
import Loader from './Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
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
    <>
        <div className='containerProductos'>
            {
                loading ? <div className='containerProductos__loader'> <Loader /> </div> :
                <div> <ItemList productos={products} /> </div>
            }
        </div>
    </>
  )
}

export default ItemListContainer