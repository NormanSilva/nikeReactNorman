import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"


const ItemCount = ({stock, onAdd}) => {

    const [vercarrito, setVercarrito] = useState(null)

    const [counter, setCounter] = useState(1);

    const sumar = () => {
     if(counter < stock) setCounter(counter + 1)
     
    }

    const restar = () => {
      if(counter > 1) setCounter(counter - 1)
  
    }

   const carrito = () => {
      onAdd(counter)
      setVercarrito(true)
    }

    

  return (
    !vercarrito ? 

    <div className='CounterContainer'>
        <div className="selecCantidad">
          Selecciona Cantidad de Producto
        </div>

        <div className="display1">
          <button className="buttonContador" onClick={restar}>-</button>
          <h1>{counter}</h1>
          <button className="buttonContador" onClick={sumar}>+</button>
        </div>

        <div>
          <button className="buttonAddCart" onClick={carrito}>Añadir al carrito</button>
        </div>
        
    </div> :
    <div className='CounterContainer'>
      <div className="selecCantidad">
        Mira tu producto en el Carrito
      </div>
      <Link to="/cart"> <button className="verCarrito">Ver Carrito</button></Link>
    </div>
  );
}

export default ItemCount