import React, { useState } from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

const ItemDetail = ({productos})  => {
    const{id} = useParams();
    const [conteo, setConteo] = useState(0)
    //const [cantidad, setCantidad] = useState(0)
 const sumarProducto = () =>{
    setConteo( conteo + 1);
 }
 const restaProducto = () => {
    setConteo(conteo - 1);
 }

 /*const handleChange= (e) =>{
    setCantidad(e.target.value)
 }

 const handleSumaCantidad = () => {
    if(cantidad)
    setConteo(conteo + parseInt(cantidad, 10))
 }

 const handleRestaCantidad = () => {
    if(cantidad)
    setConteo(conteo - parseInt(cantidad, 10))
 }*/

   //const filterProductos = productos.filter((producto) => producto.id === id)
    console.log(id);
    return(
        <div >
            
         <div id="cards-container-inside">  
          <div className="products-cards" >
           <h2>{id} del producto</h2>
            <img alt="content"></img>
             <div className="count-style">
              <button onClick={restaProducto}>-</button>
              <p>{conteo}</p>
               <button onClick={sumarProducto}>+</button>
                </div>
                  </div>
                  </div>
              </div>
    )
}

export default ItemDetail;