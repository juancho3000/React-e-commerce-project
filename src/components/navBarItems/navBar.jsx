//import { ItemListContainer} from "./itemListContainer"; 
import { useState } from "react"
import CartWidget from "../cartDetails/cartWidget";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import "./navBarstyle.css";
import { Link } from "react-router-dom";
/*import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
;*/

const NavBar =  ({productos}) => {

   const [active, setActive] = useState(false);
    return(
        <nav id="navbar-page">
            <div className="nav-icon-brand">
                <Link to="/">
                <MdOutlineHealthAndSafety size={50}/>
                </Link>
                
            </div>
             
     <ul className="header-menu">              
      <li className="menu-items">
         <div className="head-drop" onClick={()=>setActive(!active)}>
          <Link to={`/ItemListC/${"suplementos"}`}>Prodcutos</Link>
        
        </div> 
         <div>
          {active &&
            <div className="drop-inside">
                {productos.map((menu, index) =>{
                    return(
                         <div className="list-inside" key={index}>
                        <ul><li>{menu.titulo}</li></ul>
                    </div>
                    )
                })}
                
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