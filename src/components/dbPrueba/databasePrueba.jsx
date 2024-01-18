import React, { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import "./dbPrueba.css";
import NavBar from "../navBarItems/navBar";
import Footer from "../FooterDetails/footer";
import Loader from "../itemsListDetails/Loader";
//import { Link } from "react-router-dom";

const DatabasePrueba = () => {
    const [producto, setProducto] = useState([]);
    const [meds, setMeds] = useState([]);
    const [arg, setArg] = useState([]);
    const [whey, setWhey] = useState([]);
   

    //first product
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
    //first product

    //second product
    useEffect(() => {
        const medDataBase = getFirestore()
        const dataInfo = doc(medDataBase, "medicinas",
        "Xkv588xmwe7AUBWxJ0is")
        getDoc(dataInfo).then((snapshot) => {
            if(snapshot.exists()){
                const document = snapshot.data()
                setMeds(document)
                
            }
        })
    }, [])
    //second product

    //third product
    useEffect(() => {
        const argDatabase = getFirestore()
        const argInfo = doc(argDatabase, "medicinas",
        "DIw9IKe9wK5NFvAgO4Hy")
        getDoc(argInfo).then((snapshot) => {
            if(snapshot.exists()){
                const documentArg = snapshot.data()
                setArg(documentArg)
                
            }
        })
    }, [])
    //third product

    //fourth product
    useEffect(() => {
        const wheyDatabase = getFirestore()
        const wheyInfo = doc(wheyDatabase, "medicinas",
        "uxq5wHKVngEwJHMx7xht")
        getDoc(wheyInfo).then((snapshot) => {
            if(snapshot.exists()){
                const documentWhey = snapshot.data()
                setWhey(documentWhey)
                
            }
        })
    }, [])
    //fourth product
   
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
    }else{
          return(
        <div>
               <NavBar/>
               

                    <div className="item-check">

                    <div id="products-page">
                    <div id="cards-container-inside">
                    <div className="products-cards">
                    <h2>{producto.Nombre}</h2>
                    <img id="db-pic" src={producto.Imagen} alt="male-sup"></img>
                    <p>{producto.Precio}</p>
                    <p>{producto.Categoria}</p>
                    <button className="mainPageButton">detalles</button>
                    </div>

                    <div className="products-cards">
                    <h2>{meds.Nombre}</h2>
                    <img id="db-pic" src={meds.Imagen} alt="male-sup"></img>
                    <p>{meds.Precio}</p>
                    <p>{meds.Categoria}</p>
                    <button className="mainPageButton">detalles</button>
                    </div>

                    <div className="products-cards">
                    <h2>{arg.Nombre}</h2>
                    <img id="db-pic" src={arg.Imagen} alt="male-sup"></img>
                    <p>{arg.Precio}</p>
                    <p>{arg.Categoria}</p>
                    <button className="mainPageButton">detalles</button>
                    </div>

                      <div className="products-cards">
                    <h2>{whey.Nombre}</h2>
                    <img id="db-pic" src={whey.Imagen} alt="male-sup"></img>
                    <p>{whey.Precio}</p>
                    <p>{whey.Categoria}</p>
                    <button className="mainPageButton">detalles</button>
                    </div>             
                
                </div>
                    </div>
                    </div>
               
         
               
            
        <Footer/>
        </div>
     
    ) 
    }

 
}
export default DatabasePrueba