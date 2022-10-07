import React from 'react'
import Item from "./Item";


function ItemList(props) {


  return (
        props.data.map((zapatilla, index) => {
            return(
                <Item
                    key = {index}
                    id = {zapatilla.id}
                    picture = {zapatilla.picture}
                    title = {zapatilla.title}
                    price = {zapatilla.price}
                    categoria = {zapatilla.categoria}
                />
            )
        })
            
    
  );
}

export default ItemList