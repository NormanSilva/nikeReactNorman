import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { getUnProducto } from "../../services/firebase";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemLDetailContainer = (props) => {
  const [mensajeError, setMensajeError] = useState(null);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  console.log("id", id);

  useEffect(() => {
    getUnProducto(id)
      .then((data) => {
        setProducto([data]);
      })
      .catch((error) => {
        setMensajeError(error.message);
      });
  }, [id]);


  console.log("producto", producto);

  if (producto.length !== 0 || mensajeError !== null) {
    return mensajeError ? (
      <p className="mensajeError">{mensajeError}</p>
    ) : (
      <div className="container">
        <h1>{props.greeting}</h1>
        {producto.map((item) => {
          return (
            
              <ItemDetail
                key={item.id}
                id={item.id}
                picture={item.picture}
                title={item.title}
                description={item.description}
                price={item.price}
                categoria={item.categoria}
                stock = {item.stock}
              />

          );
        })}
      </div>
    );
  } else {
    return (
      <div className="display">
        <Loader />
      </div>
    );
  }
};

export default ItemLDetailContainer;
