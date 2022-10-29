import React from 'react'
import '../Formulario/Formulario.css'
import { cartContext } from '../../Context/Context'
import { useContext, useState, useEffect } from 'react';
import {createOrder} from '../../services/firebase'
import { Link } from 'react-router-dom';


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [crearOrden, setCrearOrden] = useState(null);
  const {cart, vaciarCarrito, totalPrecio} = useContext(cartContext);
  const [mensajeError, setMensajeError] = useState(null);
  const [numeroOrden, setNumeroOrden] = useState("")

  useEffect(() => {
    if(crearOrden === true){
      let orden = [...cart]
      orden = {
      buyer: { nombre, apellido, edad, celular, direccion },
      items: orden,
      date: new Date(),
      total: totalPrecio(),
    }
      
    createOrder(orden)
      .then((data) => {
        setNumeroOrden([data]);
        vaciarCarrito();
      })
      .catch((error) => {
        setMensajeError(error.message);
      });
    }
  }, [crearOrden]);


  function onNombreChange (evt){
    setNombre(evt.target.value);
  }

  function onApellidoChange (evt){
    setApellido(evt.target.value);
  }

  function onEdadChange (evt){
    setEdad(evt.target.value);
  }

  function onCelularChange (evt){
    setCelular(evt.target.value);
  }

  function onDireccionChange (evt){
    setDireccion(evt.target.value);
  }


  function onEnviar(){
    setCrearOrden(true) 
    console.log(`Tus datos son: ${nombre}, ${apellido} y tu edad es de ${edad}, pedido a ${celular} en ${direccion}`);
  }


  








  if(cart.length !== 0 || numeroOrden !== ""){
    return (
      mensajeError ? (
        <p className="mensajeError">{mensajeError}</p>
      ) :
      <>
        
        {
          numeroOrden !== "" ? 
          <div className='conteinerGracias'>
            <div className='gracias'>Gracias por comprar</div>
            <div className='nroOrden' >Tu número de orden es:</div>
            <h1 className='h1Orden'>{numeroOrden}</h1>
          </div>:
          
          <div className='ContainerFormulario'>
          <div className='title'>Datos de comprador:</div>
  
          <div className="displayform1">
            <label className='labelClass'>Nombre:</label>
            <input  className='inputClass' type="text" onChange={evt => onNombreChange(evt)} />
          </div>
  
          <div className="displayform1">
            <label className='labelClass'>Apellido:</label>
            <input  className='inputClass' type="text" onChange={evt => onApellidoChange(evt)} />
          </div>
  
          <div className="displayform1">
            <label className='labelClass'>Edad:</label>
            <input  className='inputClass' type="text" onChange={evt => onEdadChange(evt)} />
          </div>
  
          <div className="displayform1">
            <label className='labelClass'>Celular:</label>
            <input  className='inputClass' type="text" onChange={evt => onCelularChange(evt)} />
          </div>
  
          <div className="displayform1">
            <label className='labelClass'>Direccion:</label>
            <input  className='inputClass' type="text" onChange={evt => onDireccionChange(evt)} />
          </div>
  
  
            <button className='buttonFinalizarCompra'
            disabled={!(nombre !== "" && apellido !== "" && edad !== "" && celular !== "" && direccion !=="")}
            onClick={evt => onEnviar(evt)}>Crear Orden</button>
          
        </div>
        }
      </>
    )

  }else{
    return(
      <>
      <div className='carritoVacio'>
        <div className='titlecarritoVacio' >Tu carrito está vacío, compra</div>
      <Link to ="/"><button className='buttonCarritoVacio'> Ir a la tienda</button></Link>
      </div>
      
      </>
    )

  }
}

export default Formulario