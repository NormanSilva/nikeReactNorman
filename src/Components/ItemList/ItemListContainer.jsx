import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import { getProductos } from "../../Productos/ProductosAll";
import DisplayCards from '../DisplayCards/DisplayCards';
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
  const [productosList, setProductosList] = useState([]);
  const { categoryId } = useParams()

  useEffect(
    () => {
      if( categoryId == undefined ){
        getProductos().then((data) => {
          setProductosList(data);
        });
      }
      else{
        getProductoCategoria(categoryId).then((data) => {
          setProductosList(data);
        });
      }
      
    }, [categoryId]
  )
  


  {productosList.map((data) => {
    return(
      <div className='container'>
        <DisplayCards data = {productosList}/>
      </div>
    )  
  })}
}

export default ItemListContainer