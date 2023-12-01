import React from "react";
import magnesium from "../components-images/magnesium.jpeg";
import ItemDetailProps from "./itemDetailProps";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const productos = [
        {id: "1", titulo: "medicina1", descripcion: "multivitaminico masculino", precio: 5, stock: 10, img: magnesium, categoria:"suplementos"},
        {id: "2", titulo: "medicina2", descripcion: "multivitaminico femenino", precio: 10, stock: 15, img: magnesium, categoria:"suplementos"},
        {id: "3", titulo: "medicina3", descripcion: "magnesio", precio: 15, stock: 5, img: magnesium, categoria:"pediatricos"},
        {id: "4", titulo: "medicina4", descripcion: "omega 3 - aceite de pescado", stock: 20, precio: 20, img: magnesium, categoria:"pediatricos"},
    ]
    const filterProductos = productos.filter((producto) => producto.id === id)
    console.log(id, filterProductos);
        return(
            <div>
                <ItemDetailProps productos={filterProductos}/>
            </div>
        )
}

export default ItemDetailContainer;