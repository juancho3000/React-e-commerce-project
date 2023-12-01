import { Link } from "react-router-dom";
import CartWidget from "../cartDetails/cartWidget";
import ItemDetailCount from "./ItemDetailCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({description, img, price, id, titulo, stock})  => { 
   const [quantityAdd, setQuantityAdd] = useState(0);
   const {agregarCarro} = useContext(CartContext)

   
      const handleAdd = (quantity) => {
      setQuantityAdd(quantity)
      const item ={id,description,price}
      agregarCarro(item, quantity)
      console.log(quantity, "cantidad")
     
      }
 const checkqty = quantityAdd * price;
 console.log(checkqty, "precio subtotal individual")
      
   
    return(
        <div className="cards-page-main">
            
         <div id="cards-container-inside">
                     <div className="products-cards" >
           <h2>{id} {description}</h2>
            <img src={img} alt={titulo}></img>
            <h5>${price}</h5>
           
            {quantityAdd > 0 ? (
               
               <button id="finish-button">
            <p> precio total: ${checkqty}</p>
            <p>cantidad: {quantityAdd}</p>
                  <Link to="/CartProducts">terminar compra</Link>
               </button>
               
            ) : (
               <ItemDetailCount initial={0} stock={stock} onAdd={handleAdd}/>
            )}
                  
                  </div>
                  </div>
                  <Link to={"/CartProducts"}>
      <CartWidget/>
     </Link>
              </div>
    )
}

export default ItemDetail;