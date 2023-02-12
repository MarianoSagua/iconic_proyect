import React, { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [valor, setValor] = useState(1);

    const handleSumar = (e)=>{
        e.preventDefault();

        if(valor < stock){
            setValor(valor + 1);
        }else{
            
        }
    }

    const handleRestar = (e)=>{
        e.preventDefault();

        if(valor > 1){
            setValor(valor - 1);
        }
    }

    const handleConfirmar = ()=>{
        onAdd(valor);
    }

  return (
    <div className='itemCountContenedor'>
        <button onClick={handleRestar}> - </button>
        <p>Cantidad: {valor}</p>
        <button onClick={handleSumar}> + </button>
        <button onClick={handleConfirmar}>Confirmar</button>
    </div>
  )
}

export default ItemCount