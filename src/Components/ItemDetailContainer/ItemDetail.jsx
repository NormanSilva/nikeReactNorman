import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css' 
import { cartContext } from '../../Context/Context'
import { useContext } from 'react'

const ItemDetail = (props) => {
  const {addItemCount} = useContext(cartContext)

    function onAdd (count){
        const item = {id: props.id, title: props.title, picture: props.picture, description: props.description, price: props.price, count: count}
        addItemCount(item)
    }

  return (
    <div className='Container'>
        <div key={props.id}>
        <div className='title'>{props.title}</div>
        <img className='picture' src={props.picture} alt=""></img>
        <div className='description'>{props.description}</div>
        <div className='price'>s/. {props.price}</div>
        <ItemCount stock={props.stock} onAdd={onAdd} initial= {1}/>
        </div>
    </div>

  )
}

export default ItemDetail