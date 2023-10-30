import "./cart-page-styles.css";
import Footer from "../FooterDetails/footer";
import NavBar from "../navBarItems/navBar";

 function ProductosComprar () {
    return(
        <div>
            <NavBar/>
              <div id="products-page">
            <h3>Donde va a estar el carrito y total</h3>
         </div>
         <Footer/>
        </div>
      
    )
}

export default ProductosComprar;