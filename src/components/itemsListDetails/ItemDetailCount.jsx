import {useEffect, useState} from "react";

const ItemDetailCount = ({onAdd, stock}) => {
    const [conteo, setConteo] = useState(+window.localStorage.getItem('conteo'))
    useEffect(() => {
      window.localStorage.setItem('conteo', conteo)
    }, [conteo])


    const sumarProducto = () =>{
       conteo < 10 ? setConteo( conteo + 1) : alert("el stock no es suficiente");
     }
     const restaProducto = () => {
        if(conteo === 0){return;}
       setConteo(conteo - 1);
     }
     console.log(conteo, stock)
    
   
    return(
        <div className="count-style">
        <button id="minus" onClick={restaProducto}>-</button>
        <p>{conteo}</p>
         <button id="plus" onClick={sumarProducto}>+</button>
           <button onClick={() => onAdd(conteo)} disabled={!conteo} id="buy">agregar al carrito</button>
          </div>
         
    )
}
export default ItemDetailCount