import React, { useEffect, useState } from "react";
import "./orders.css"
import { collection, addDoc, getFirestore, doc, getDoc} from "firebase/firestore";

const SendOrders = () => {
    const [nombre, setNombre]= useState("");
    const [email, setEmail]= useState("");
    const [orderId, setOrderId]= useState(null);

    const [info, setInfo] = useState([])
    useEffect(() => {
        const baseDatos = getFirestore()
        const oneItem = doc(baseDatos, "MiOrden",
        "14bOU8B76amlFLyosXxs")
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setInfo(docs)
            }
        })
    },[])

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
          
           <div>
            <p>emails and usernames</p>
          <table>
            <tr>
            <th>email</th>
            <th>name</th>
            </tr>
            <tr>
                <td>{info.email}</td>
                <td>{info.name}</td>
            </tr>
          </table>
           </div>
        </div>
        
    )
}

export default SendOrders;

/*
collection(db,"MiOrden")
    orderBy("email", "asc")
*/