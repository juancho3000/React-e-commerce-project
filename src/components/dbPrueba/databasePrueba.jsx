import React, { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const DatabasePrueba = () => {
    const [producto, setProducto] = useState([]);
    useEffect(() =>{
        const baseDatos = getFirestore()
        const oneItem = doc(baseDatos, "medicinas",
        "H05FGjGTAhzeX9SJH9T3")
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProducto(docs)
            }
        })
    },[])

    return(
        <div id="cards-container-inside">
            <div className="products-cards">
            <h2>{producto.categoria}</h2>
            <p>{producto.precio}</p>
            <p>{producto.descripcion}</p>
            </div>
          
        </div>
    )
}
export default DatabasePrueba