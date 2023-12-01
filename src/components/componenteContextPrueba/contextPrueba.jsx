import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ComponentePrueba = () => {
    const { myNumber} = useContext(CartContext)
    return(
         <div>numero: {myNumber}</div>
    )
}
export default ComponentePrueba