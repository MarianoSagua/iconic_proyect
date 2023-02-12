import React, { createContext, useContext, useState } from 'react'

const contexto = createContext();
const Provider = contexto.Provider;

export const useCarrito = ()=>{
    const valorDelContexto = useContext(contexto);

    return valorDelContexto;
}

const CustomProvider = ({children}) => {
    const [carrito, setCarrito] =  useState([]);
    const [totalProductos, setTotalProductos] = useState(0);

    const valorDelContexto = {
        carrito: carrito,
        totalProductos: 0,
        setCarrito: setCarrito,
        setTotalProductos: setTotalProductos
    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider