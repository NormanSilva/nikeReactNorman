import React from 'react'
import closeIcon from '../../closeIcon.png'
import './CartItems.css'
import { cartContext } from '../../Context/Context'
import { useContext } from 'react';

const CartItems = ({id, title, picture, count}) => {
    const {deleteItem} = useContext(cartContext)
    console.log(picture)
  return (

   <div className='display'>
        <button onClick={()=>deleteItem(id)}><img src={closeIcon}/></button>
        <img src={picture} alt="picture" />
        <div className='title'>{title}</div>
        <div className='count'>{count}</div>
   </div>
  )
}

export default CartItems