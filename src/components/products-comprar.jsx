import { useState, useEffect } from "react";
import MultVit from "./components-images/mult-vit-sup.jpg";

export const ProductosComprar = () => {

    const [conteo, setConteo] = useState(0);
    useEffect(() => {
        console.log({conteo})
    })

    return(
        <div id="products-page"><h3>Sitio web con objetivo de venat de diferentes tipos de medicinas y servicios medicos variados</h3>
        <button onClick={() => setConteo(conteo + 1)}>Click to add a product</button>
         <p>has comprado {conteo} productos</p>
         <img alt="prods-images" src={MultVit}></img>
         </div>
    )
}

export default ProductosComprar;