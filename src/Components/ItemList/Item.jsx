import React from 'react'
import "./Item.css"


function Item(props) {
  return (
    <div className='ItemContainer'>
        <div className='Item-picture'> <img src={props.picture} alt={props.title}/> </div>
        <div className='info'>
            <p className='Item-Title'>{props.title}</p>
            <p className='Item-price'>$ {props.price}</p>
        </div>
    </div>

  )
}

export default Item