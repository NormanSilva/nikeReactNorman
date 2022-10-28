import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import DisplayCards from '../DisplayCards/DisplayCards';
import { useLocation, useParams } from "react-router-dom";
import { getProductos, getProductoCategoria} from '../../services/firebase';
import Loader from '../Loader/Loader';



const ItemListContainer = (props) => {

  const [mensajeError, setMensajeError] = useState(null);
  const [productosList, setProductosList] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const { categoryId } = useParams()
  let location = useLocation()

  useEffect(
    () => {
      console.log("categoryId", categoryId);
      if (categoryId !== categoria){
        setProductosList([]);
        if( categoryId !== undefined && categoryId !== null && String(location.pathname).indexOf("category") !== -1 ){
          getProductoCategoria(categoryId).then((data) => {
            console.log("data", data)
            setProductosList(data);
            setCategoria(categoryId)
            setMensajeError(null) 
          }).catch((error) => {
            setMensajeError(error.message) 
          });
        }
        else{
          getProductos().then((data) => {
            setProductosList(data);
            console.log("data", data);
          });
        }
      }
      
      
      
    }, [categoryId, categoria, location.pathname]
  )
  
  if(productosList.length !== 0 || mensajeError !== null){
    return(
        mensajeError ? 
          <p className='mensajeError'>{mensajeError}</p> :
          
        <div className='container'>
          <DisplayCards data = {productosList}/>
        </div>
    )  

  } else{
      return(
        <div className='display'><Loader/></div>
      )
    }
  
}

export default ItemListContainer