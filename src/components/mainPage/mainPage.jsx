import { useState } from "react";
import NavBar from "../navBarItems/navBar";
import Footer from "../FooterDetails/footer";
import { Link } from "react-router-dom";
import "./mainPage.css";
import Loader from "../itemsListDetails/Loader";


function MainPage () {
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
        <div className="main-div">
       <NavBar/>
       <div id="mainPageCenter">
         <button className="mainPageButton">
        <Link to={`ItemListC`}>click para ir a productos</Link></button>
       <button className="mainPageButton"><Link to={`dbPrueba`}>click para db</Link></button>
       <button className="mainPageButton"><Link to={`ordersDemand`}>click para orders de prueba</Link></button>
       <button className="mainPageButton"><Link to={`Render`}>click para ver render</Link></button>
       </div>
        <Footer/>
        </div>
    )
    }
  
   
}

export default MainPage;