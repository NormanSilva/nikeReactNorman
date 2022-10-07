import React, {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"
import { getUnProducto } from "../../Productos/ProductosAll";
import Item from "../ItemList/Item";
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';




const ItemLDetailContainer = (props) => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  console.log("id", id)

  useEffect( () => {
      getUnProducto(id).then((data) => {
        setProducto(data);
      })
    }, [id]
  );

  console.log("producto", producto)
  



  return (
    <div className='container'>
      <h1>{props.greeting}</h1>
      {producto.map( (item) => {

        return (
            <Item
            key = {item.id}
            id = {item.id}
            picture = {item.picture}
            title = {item.title}
            price = {item.price}
            categoria = {item.categoria}
          />          
        )
       })}
       <ItemCount/>
    </div>
  )
}

export default ItemLDetailContainer