import ItemList from "./item-list"
import NavBar from "./navBar"

const ItemListContainer = ({greeting}) => {

    const productos = [
    {id: "1", titulo: "medicina1", descripcion: "multivitaminico masculino", precio: 5, stock: 10, image: "./components-images/mult-vit-sup.jpg"},
    {id: "2", titulo: "medicina2", descripcion: "multivitaminico femenino", precio: 10, stock: 15, image: "./components-images/multi-vit-women.jpg"},
    {id: "3", titulo: "medicina3", descripcion: "magnesio", precio: 15, stock: 5, image: "./components-images/magnesium.jpeg"},
    {id: "4", titulo: "medicina4", descripcion: "omega 3 - aceite de pescado", stock: 20, precio: 20, image: "./components-images/fish-oil.jpg"},
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
    return(  
    <div id="container-block">
       
        <NavBar productos={productos}/>
         {greeting}
        <ItemList productos={productos}/>
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


