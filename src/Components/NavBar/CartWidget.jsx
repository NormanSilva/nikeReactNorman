import React from 'react'
import './CartWidget.css'
import iconoBolsa from '../../iconoBolsa.svg'
import { cartContext } from '../../Context/Context'
import { useContext, useEffect, useState } from 'react'


const CartWidget = () => {

  const [countItem, setCountItem] = useState(0)
  const {cart} = useContext(cartContext)
  useEffect(() => {
    let valor = 0
    let newCart = [...cart]
    newCart.forEach(item => {
      valor = valor + item.count
    })
    setCountItem(valor)
  }, [cart])


  return (
    <div className='display1'>
      {countItem}
      <div className='ContainerIcon'>
        <div className='iconBolsa'>
          <img src={iconoBolsa} alt="iconoBolsa"/>
        </div> 
      </div>
    </div>
  )
}

export default CartWidget