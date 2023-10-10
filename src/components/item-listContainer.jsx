import {  useState, useEffect } from "react";
import { ItemsList } from "./item-list";

export const ItemListContainer = () => {
    const [goToPage, setGoToPage] = useState(false)
    useEffect(() => {
        const zaWarudo = setTimeout(() => {
           console.log("tiempo")
        }, 2000);
        return() => clearTimeout(zaWarudo)
    })
    const [conteo, setConteo] = useState(0);
         useEffect(() => {
        console.log("has comprado el producto",{conteo}, "veces")
    })
  
    return(
        <section id="main-sec">
         <div id="main-page-div">
            
           {ItemsList.map((menu, index) => {
            return(
                <div className="this" key={index}>
                    <li className="button-products-show" onClick={() => setGoToPage(!goToPage)}>
                        click para ver productos
                        <div>
                            {goToPage &&
                                  <div className="products-cards" key={index}>
                                  <h2>{menu.titulo}</h2>
                                  <img src={menu.image} alt={menu.descripcion}></img>
                                  <p>${menu.precio}</p>
                                  <button onClick={() => setConteo(conteo + 1)}>comprar</button>
                                  <p>ha comprado {menu.titulo} = {conteo} veces</p>
                              </div>
                            }
                        </div>
                    </li>
                </div>
            )
           })}
            
         </div>
         
        </section>
    )
}
export default ItemListContainer;