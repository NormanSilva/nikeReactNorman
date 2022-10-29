import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";



function Item(props) {
  return (
    <Link to={`/item/${props.id}`} key = {props.id}>
      <div className='ItemContainer'>
          <div className='Item-picture'> <img src={props.picture} alt={props.title}/> </div>
          <div className='info'>
              <p className='Item-Title'>{props.title}</p>
              <p className='Item-description'>{props.description}</p>
              <p className='Item-price'>$ {props.price}</p>
        </div>
          
      </div>
    </Link>
  )
}

export default Item