import React from "react";
import NavBar from "../navBarItems/navBar";
import Footer from "../FooterDetails/footer";
//import ItemListContainer from "../itemsListDetails/itemListContainer";
import { Link } from "react-router-dom";
import "./mainPage.css";

function MainPage () {
    return(
   
        
        <div className="main-div">
       <NavBar/>
       <div id="mainPageCenter">
         <button className="mainPageButton">
        <Link to={`/ItemListC`}>click</Link>
       </button>
       </div>
        <Footer/>
        </div>
        

    )
   
}

export default MainPage;