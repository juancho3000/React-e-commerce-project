import React from "react";
import ItemList from "./item-list";
import "./itemListStyle.css";

const Item = ({productos}) => {
    return(
        <div className="item-check">
            {productos.map((p) =>{
                return(
                    <ItemList
                    key={p.id}
                    id={p.id}
                    title={p.titulo}
                    description={p.descripcion}
                    price={p.precio}
                    img={p.img}
                    categoria={p.categoria}
                    stock={p.stock}
                     />
                )
            })}
        
        </div>
        
    )
}

export default React.memo(Item);