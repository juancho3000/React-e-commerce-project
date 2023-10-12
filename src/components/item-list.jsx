import React,{ useState} from "react";

const ItemList = ({productos}) => {
  
    const [conteo, setConteo] = useState(0);
    const [activar, setActivar] = useState(false);
   
    return(
        <section id="main-sec">
         <div id="main-page-div">
            <div id="click-div" onClick={() => setActivar(!activar)}>
                <p>click para abrir tarjetas de productos </p>
                <div>
                    {activar&& 
                <div id="cards-container-inside">
                      {productos.map((menu, index)=>{ 
                    return(
                    <div className="products-cards" key={index}>
                    <h2>{menu.titulo}</h2>
                    <img src={menu.imagen} alt={menu.descripcion}></img>
                    <p>${menu.precio}</p>
                    <button onClick={() => setConteo(conteo + 1)}>comprar</button>
                    <p>ha comprado  = {conteo} veces</p>
                    <p>hay disponibilidad de {menu.stock} en {menu.titulo}</p>
                </div>
                    )
                })} 
                </div>
                }
                </div>
                
            </div>
        </div> 
        </section>
    )
}
export default ItemList;