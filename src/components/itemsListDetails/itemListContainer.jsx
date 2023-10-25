import ItemList from "./item-list";
 import magnesium from "../components-images/magnesium.jpeg";
import { useParams } from "react-router-dom";
import NavBar from "../navBarItems/navBar";
import Footer from "../FooterDetails/footer";
//import ItemDetail from "./itemDetail";

const ItemListContainer = () => {
    const {categoria} = useParams()
    const productos = [
    {id: "1", titulo: "medicina1", descripcion: "multivitaminico masculino", precio: 5, stock: 10, img: magnesium, categoria:"suplementos"},
    {id: "2", titulo: "medicina2", descripcion: "multivitaminico femenino", precio: 10, stock: 15, img: magnesium, categoria:"suplementos"},
    {id: "3", titulo: "medicina3", descripcion: "magnesio", precio: 15, stock: 5, img: magnesium, categoria:"pediatricos"},
    {id: "4", titulo: "medicina4", descripcion: "omega 3 - aceite de pescado", stock: 20, precio: 20, img: magnesium, categoria:"pediatricos"},
]

const productosDespliegue = new Promise((resolve, reject) => {
    if(productos.length > 0){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        reject("No hay productos")
    }
})
    productosDespliegue
    .then((outcome) => {
        console.log("mensaje acierto",outcome)
    })
    .catch((error) => {
        console.log("mensaje error",error)
    })

    const busquedaProductos = productos.filter((producto) => producto.categoria === categoria)
    console.log("mensaje de filtro", busquedaProductos)
    return(  
    <div id="container-block">
       <NavBar/>
        <ItemList productos={productos}/>
        <Footer/>
    </div>
        
     
   
    )
    } 
    export default ItemListContainer;
    /*
    <div>
    {productos.map((index) => {
        return(
            <div>
                <h3>{index.titulo}</h3>
            <img src={index.image} alt={index.descripcion}></img>
            <p>Disponibles : {index.stock}</p>
            <p>{index.precio}</p>
            <button onClick={() => setCompra(compra + 1)}>Comprar</button>
            <p>Has comprado {index.titulo} {compra} veces</p>
            </div>
            
        )
    })}
</div>*/


