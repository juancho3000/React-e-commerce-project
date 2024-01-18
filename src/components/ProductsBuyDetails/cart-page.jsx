import "./cart-page-styles.css";
import Footer from "../FooterDetails/footer";
import NavBar from "../navBarItems/navBar";
import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../itemsListDetails/Loader";
import { SlArrowLeft } from "react-icons/sl";

 function ProductosComprar () {
  const {cart, limpiarCarro, outcomePrice, totalBuy, quitarDelCarro} = useContext(CartContext)
  const [ loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading((loading) => !loading)
  }, 2000);
  if(loading){
    return(
      <div>
      <NavBar/>
      <div id="products-page">
         <Loader/>
      </div>
      <Footer/>
      </div>
    )
  }else if(outcomePrice === 0){
    return(
      <div>
        <NavBar/>
        <div id="products-page">
        <h1>No hay items en el carrito, haz click en el boton de productos abajo</h1>
        <Link to="/ItemListC">Ir a productos</Link>
        </div>
       <Footer/>
      </div>
    )
  }else{
    return(
        <div>
            <NavBar/>
              <div id="products-page">
                <Link id="home-route" to="/"><SlArrowLeft />Ir al home</Link>
                <div id="payment-check-container">
            {cart.map(p =>
            
               <div className="cart-prods-bought" key={p.id} >
              <h3>Producto: {p.description}</h3>
              <p>Precio individual: ${p.price}</p>
              <p>Cantidad: {p.qty}</p>
              <p>Subtotal: ${p.price * p.qty}</p>
              <button className="delete-single-prod" onClick={() => quitarDelCarro(p.id)}>x</button>
             </div>
            
           )}
           </div>
            <h3 id="check-final">precio absoluto: ${totalBuy}</h3>
            <button id="clean-cart" onClick={() => limpiarCarro()}>click para limpiar carro de compra</button>
            
         </div>
         <Footer/>
        </div>
    )
  }
}

export default ProductosComprar;