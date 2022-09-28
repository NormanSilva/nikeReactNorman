import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import { getProductos } from "../../Productos/ProductosAll";
import DisplayCards from '../DisplayCards/DisplayCards';


const ItemListContainer = (props) => {
  const [productosList, setProductosList] = useState([]);

  useEffect(
    () => {
      getProductos().then((data) => {
        setProductosList(data);
      });
    }, []
  )
  



  return (
    <div className='container'>
      <h1>{props.greeting} </h1>
      <DisplayCards data={productosList}/>
      

      
    </div>
  )
}

export default ItemListContainer