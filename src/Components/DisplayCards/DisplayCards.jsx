import React from 'react'
import ItemList from '../ItemList/ItemList';
import "./DisplayCards.css";

function DisplayCards(props) {
  return (
        <div className='DisplayCards'>
            <ItemList data = {props.data}/> 
        </div>
    ) 
}

export default DisplayCards
