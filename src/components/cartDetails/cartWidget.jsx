import { useContext, useEffect} from "react";
import{ AiOutlineShoppingCart } from "react-icons/ai"
import "./cartWidget.css";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget () {
    const {outcomePrice} = useContext(CartContext)
    useEffect(() =>{
        
    })
    return(
        <div className="cart-div">
             <Link to="/CartProducts"  style={{display: outcomePrice !== isNaN ? "block" : "none"}} >
                <AiOutlineShoppingCart className="shop-cart-icon" size={50}/>
                {outcomePrice}
             </Link>
        </div>
    )
}

export default CartWidget