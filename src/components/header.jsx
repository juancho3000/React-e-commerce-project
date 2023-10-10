import NavBar from "./navBar";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { useState } from "react";
import { Navigate } from "react-router-dom";


const HeaderPage = () => {
    const [goBackToMain, setGoBackToMain] = useState(false);
    if(goBackToMain){
        return <Navigate to = "/Main-Page"/>
    }
    return(
        <header>
            <div className="nav-header">
                <a href="/" className="main-logo" onClick={() => {setGoBackToMain(true)}}>
                    <MdOutlineHealthAndSafety size={50}/>
                </a>
                <NavBar/>
                
            </div>
  
        </header>
    )
}

export default HeaderPage;