import { useState } from "react"
import CartWidget from "../cartDetails/cartWidget";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import "./navBarstyle.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const NavBar = () => {
   const [active, setActive] = useState(false);
    return(
        <nav id="navbar-page">
            <div className="nav-icon-brand">
                <Link to={"/"}>
                <MdOutlineHealthAndSafety size={50}/>
                </Link>
                
            </div>
             
     <ul className="header-menu">              
      <li className="menu-items">
         <div className="head-drop" onClick={()=>setActive(!active)}>
        Productos
        </div> 
        
         <div>
          {active &&
            <div className="drop-inside">
                         <div className="list-inside">
                        <ul>
                                <li><NavLink to={`/categoria/${"suplementos"}`} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Suplementos</NavLink></li>
                                <li><NavLink to={`/categoria/${"pediatricos"}`} className={({isActive}) => isActive ? "ActiveOption" : "option"}>pediatria</NavLink></li>
                            </ul>
                    </div>
            </div> 
            }
        </div>                   
        </li>
     </ul>
     <Link to={"/CartProducts"}>
      <CartWidget/>
     </Link>
   
    </nav>

)
    
}

export default NavBar;