import React from "react";
import ItemList from "./item-list";

const Item = ({productos}) => {
    return(
        <div className="item-check">
            {productos.map((p) =>{
                return(
                    <ItemList
                    key={p.id}
                    id={p.id}
                    name={p.titulo}
                    description={p.descripcion}
                    price={p.precio}
                    image={p.img}
                     />
                )
            })}
        </div>
    )
}

export default Item;