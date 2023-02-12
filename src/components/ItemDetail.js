import React from 'react'
import { useCarrito } from './CustomProvider';
import ItemCount from './ItemCount'

const ItemDetail = ({titulo, imagen, precio, descripcion, id, stock = 10}) => {
  const { setCarrito } = useCarrito();

  const onAdd = (parametro) =>{
    console.log(parametro);
  };

  return (
    <div>
      <h1>Detalle del producto - $1000</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat voluptas, adipisci enim molestias corrupti quod modi reprehenderit tempora illum, excepturi, dolorem accusantium sequi minima atque quam exercitationem nihil veritatis.
      Distinctio sequi sit eius, architecto assumenda vel laudantium, fuga perferendis tempore earum exercitationem suscipit beatae natus ipsum adipisci optio obcaecati sapiente similique, est quos rerum nemo deserunt porro commodi? Sed?
      Nam necessitatibus exercitationem vero excepturi repellendus voluptas recusandae quis natus iure laudantium fugiat ea a doloremque voluptates iusto alias optio vel quia, enim maxime. Sed labore in exercitationem? Maxime, corporis.
      Doloremque beatae dolorum corrupti suscipit sunt hic tempora ut eveniet consequatur repellendus, quibusdam rerum accusamus quaerat velit aspernatur, assumenda neque obcaecati provident in iure impedit? Eos, sint. Repellat, pariatur facere.
      Quos expedita ad deleniti? Aliquam, est quos itaque eos nisi omnis minima excepturi natus possimus sequi, culpa suscipit mollitia debitis repellendus. Quod sequi perspiciatis pariatur reprehenderit veritatis ea quibusdam vitae.</p>

      <ItemCount stock={stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail