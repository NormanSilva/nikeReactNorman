import React, { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({stock = 5, initial = 1, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const sumar = () => {
     if(counter <= 4) setCounter(counter + 1)
     
    }

    const restar = () => {
      if(counter > initial) setCounter(counter - 1)
  
    }

   const carrito = () => {
      onAdd = counter
      console.log("Agregaste " + onAdd + " a tu carrito")
    }

    

  return (
    <div className='CounterContainer'>
        <div>
          Selecciona Cantidad de Producto
        </div>

        <div>
          <h1>{counter}</h1> 
        </div>
        
        <div>
          <button onClick={restar}>Restar</button>
          <button onClick={sumar}>Sumar</button>
          <button onClick={carrito}>Añadir al carrito</button>
        </div>
        
    </div>
  );
}

export default ItemCount