import React from "react";
//import { Navigate } from 'react-router-dom';
import "./itemListStyle.css";
import { Link } from "react-router-dom";

const ItemList = ({productos}) => {
  
   
    //const [activar, setActivar] = useState(false);

    
   
    return(
        <section id="main-sec">
         <div id="main-page-div">
          
             <div>
                 
                      <div id="cards-container-inside">
                      
                  {productos.map((menu, index)=>{
                    return(
                    <div className="products-cards" key={index}>
                    <h2>{menu.descripcion}</h2>
                    <img src={menu.img} alt="content"></img>
                    <p>${menu.precio}</p>
                    <button><Link to={`/ItemDetail/${menu.id}`}>Detalles</Link></button>
                    <p>hay disponibilidad de {menu.stock} en {menu.titulo}</p>
                </div>
                    )
                  })}
                  </div>
                </div>
        </div> 
        </section>
    )
}
export default ItemList;