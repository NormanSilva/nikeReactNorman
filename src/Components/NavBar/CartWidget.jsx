import React from 'react'
import './CartWidget.css'
import iconoBolsa from '../../iconoBolsa.svg'

const CartWidget = () => {


  return (
    <div>
      <div className='ContainerIcon'>
        <a href="#" className='iconBolsa'>
          <img src={iconoBolsa} alt="iconoBolsa"/>
        </a>
      </div>
    </div>
  )
}

export default CartWidget