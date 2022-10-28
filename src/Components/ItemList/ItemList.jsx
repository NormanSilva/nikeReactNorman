import React from "react";
import Item from "./Item";
import Loader from "../Loader/Loader";

function ItemList(props) {

  const productos = props.data
  console.log("data", productos, productos.length);
  


  if(productos.length !== 0){
    return(props.data.map((zapatilla, index) => {
      return (
        <Item
          key={index}
          id={zapatilla.id}
          picture={zapatilla.picture}
          title={zapatilla.title}
          description={zapatilla.description}
          price={zapatilla.price}
          categoria={zapatilla.categoria}
        />
      );
    }))
    
   
  } else{
    return(<Loader/>)
  }
  
}

export default ItemList;
