import React, { useState } from "react";
import "./itemListStyle.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function ItemList({description, img, price, id, title, categoria})  {
  
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading((loading) => !loading) 
    }, 2000)
    if(loading){
        return (
        <Loader/> 
        )
    }else{
          return(
        <section id="main-sec">
         <div id="main-page-div">
             <div>          
                <div id="cards-container-inside">
                <div className="products-cards">
                <h2>{description}</h2>
                <img src={img} alt={title}></img>
                <p>${price}</p>
                <p>{categoria}</p>
                <button><Link to={`/ItemDetail/${id}`}>Detalles</Link></button>    
                </div>
                  </div>
                </div>
        </div> 
        </section>
    )
    }

  
}
export default ItemList;