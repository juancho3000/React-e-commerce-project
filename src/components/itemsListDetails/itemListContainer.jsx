import magnesium from "../components-images/magnesium.jpeg";
import { useParams } from "react-router-dom";
import NavBar from "../navBarItems/navBar";
import Footer from "../FooterDetails/footer";
import Item from "./item";
//import { useState } from "react";
//import Loader from "./Loader";

const ItemListContainer = () => {
    const {categoria} = useParams()
    const productos = [
    {id: "1", titulo: "medicina1", descripcion: "multivitaminico masculino", precio: 5, stock: 10, img: magnesium, categoria: "suplementos"},
    {id: "2", titulo: "medicina2", descripcion: "multivitaminico femenino", precio: 10, stock: 15, img: magnesium, categoria: "suplementos"},
    {id: "3", titulo: "medicina3", descripcion: "magnesio", precio: 15, stock: 5, img: magnesium, categoria: "pediatricos"},
    {id: "4", titulo: "medicina4", descripcion: "omega 3 - aceite de pescado", stock: 20, precio: 20, img: magnesium, categoria: "pediatricos"},
]

    const busquedaProductos = productos.filter((producto) => producto.categoria === categoria)
    console.log(busquedaProductos)
    
            return(  
    <div id="container-block">
       <NavBar/>
       <div id="inside-block">
        <Item productos={busquedaProductos}/>
       </div>
        
        <Footer/>
    </div>     
    )
    
    } 
    export default ItemListContainer;

    /*
     const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading((loading) => !loading) 
    }, 2000)
    if(loading){
        return (
            <div>
            <NavBar/>
            <div id="mainPageCenter">
              < Loader/> 
            </div>
            <Footer/>
        </div>
        )
    }else{}
    */ 
