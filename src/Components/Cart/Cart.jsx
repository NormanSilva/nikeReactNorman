import React from 'react'
import Loader from "../Loader/Loader";
import { cartContext } from '../../Context/Context'
import { useContext, useState } from 'react';
import CartItems from './CartItems';
import { Link } from 'react-router-dom'
import '../Cart/Cart.css';

const Cart = () => {
  const {cart, totalPrecio} = useContext(cartContext)
  const {vaciarCarrito} = useContext(cartContext)
  // const {totalPrecio} = useContext(totalPrecio)
  


  return (
    <div>
      <div>{cart.map((item, Index) =>
        <CartItems key={Index} title={item.title} id={item.id} count= {item.count} picture={item.picture}/> )}
      </div>
      <div className='totalAPagar'>
        <h4>Total a pagar:</h4>
        <h2>s/. {totalPrecio()}</h2>
      </div>
      <div className='display'>
        <button className='buttonVaciar' onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to = "/checkout">
            <button className='buttonFinalizar' >Finalizar Comprar</button>
          </Link>
        </div>
    </div>
  )
}

export default Cart