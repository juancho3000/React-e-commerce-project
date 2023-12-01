import React from "react";
import ItemDetail from "./itemDetail";

const ItemDetailProps = ({productos}) => {
    return(
     
        <div className="item-check">
            {productos.map((p) =>{
                return(
                    <ItemDetail
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

export default React.memo(ItemDetailProps);