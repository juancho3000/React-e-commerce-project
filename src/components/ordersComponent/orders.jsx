import React, { useState } from "react";
import { collection, addDoc, getFirestore} from "firebase/firestore";

const SendOrders = () => {
    const [nombre, setNombre]= useState("");
    const [email, setEmail]= useState("");
    const [orderId, setOrderId]= useState(null);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersColection, order).then(({id}) => {
            setOrderId(id)})
    }
    const order = { 
        nombre, email
    }

    const ordersColection = collection(db, "MiOrden")

    return(
        <div>
            <h1>formulario</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="nombre" onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" placeholder="correo" onChange={(e) => setEmail(e.target.value)}/>
                <button type="sumbit">enviar</button>
            </form>
            <p>orden: {orderId}</p>
        </div>
    )
}

export default SendOrders;