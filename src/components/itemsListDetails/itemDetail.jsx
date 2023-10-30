import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({productos})  => {
    const{id} = useParams();
    const [conteo, setConteo] = useState(0)

 const sumarProducto = () =>{
    setConteo( conteo + 1);
 }
 const restaProducto = () => {
    setConteo(conteo - 1);
 }

    const filterProductos = productos.filter((producto) => producto.id === id)
    console.log(id, filterProductos);
    return(
        <div >
            
         <div id="cards-container-inside">
            {filterProductos.map((p) =>{
                return(
                     <div className="products-cards" >
           <h2>{id} {p.descripcion}</h2>
            <img src={p.img} alt={p.titulo}></img>
            <h5>${p.precio}</h5>
             <div className="count-style">
              <button id="minus" onClick={restaProducto}>-</button>
              <p>{conteo}</p>
               <button id="plus" onClick={sumarProducto}>+</button>
                
                </div>
                <button id="buy">agregar al carrito</button>
                  </div>
                )
            })}  
         
                  </div>
              </div>
    )
}

export default ItemDetail;