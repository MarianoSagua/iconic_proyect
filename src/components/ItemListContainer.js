import React from 'react'
import { useState, useEffect } from 'react'

const ItemListContainer = (prop) => {

  // const [counter, setCounter] = useState(0)
  // const [searchText, setSearchText] = useState("")
  // const [open, setOpen] = useState(false)
  // const [loadMore, setLoadMore] = useState(false)

  const [cargo, setCargo] = useState(false)
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    console.log("Pido algo a la base de datos")

    setTimeout(()=>{
      console.log("Termino de pedir la base de datos")
      setCargo(true)

      const ejemploProductos = [
        {id:1, nombre: "Producto 1", precio: 100},
        {id:2, nombre: "Producto 2", precio: 200},
        {id:3, nombre: "Producto 3", precio: 300}
      ]

      setProductos(ejemploProductos)

    }, 2000)
  }, [])

  // const handleClick = ()=>{
  //   setCounter(counter + 1);
  // };

  // const handleOnChange = (e)=>{
  //   setSearchText(e.target.value);
  // };

  // const handleToggleDrawer = ()=>{
  //   setOpen(!open)
  // };

  return (
    <div>
      {/* {prop.greeting}
      <p>Contador: {counter}</p>
      <button onClick={handleClick}>Sumar</button>

      <p>Drawer Open: {open ? "Abierto" : "Cerrado"}</p>
      <button onClick={handleToggleDrawer}>toggle drawer</button>

      <p>Texto: {searchText}</p>
      <input type="text" onChange={handleOnChange} /> */}

      {cargo ? "Termino de cargar" : "Cargando...."}
    </div>
  )
}

export default ItemListContainer