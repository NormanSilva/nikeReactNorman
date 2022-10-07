import React from 'react'
import './CartWidget.css'
import iconoBolsa from '../../iconoBolsa.svg'
import { Link } from "react-router-dom";

const CartWidget = () => {


  return (
    <div>
      <div className='ContainerIcon'>
        <Link to ="cart">
          <div className='iconBolsa'>
            <img src={iconoBolsa} alt="iconoBolsa"/>
          </div>
        </Link> 
      </div>
    </div>
  )
}

export default CartWidget