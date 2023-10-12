import { useEffect, useState } from "react";
import{ AiOutlineShoppingCart } from "react-icons/ai"

function CartWidget () {
    const [contado, setContado] = useState(false);
    useEffect(() =>{
        
    })
    return(
        <div className="cart-div">
             <button onClick={() => setContado(contado + 1)} className="shop-cart-icon"><AiOutlineShoppingCart size={60}/>{contado}</button>
        </div>
    )
}

export default CartWidget