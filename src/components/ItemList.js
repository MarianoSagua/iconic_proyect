import React from 'react'
import Item from './Item';

const ItemList = ({productos}) => {
  return (
    <div className='containerProductos__productos'>
      {productos.map((item)=>{
        return(
          <Item producto={item} key={item.id} />
        )
      })}
    </div>
  )
}

export default ItemList