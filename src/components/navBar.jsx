//import { ItemListContainer} from "./itemListContainer"; 
import { useState } from "react"
import CartWidget from "./cartWidget";
import { MdOutlineHealthAndSafety } from "react-icons/md";
/*import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
;*/

const NavBar =  ({productos}) => {

   const [active, setActive] = useState(false);
    return(
        <nav id="navbar-page">
            <div className="nav-icon-brand">
                <MdOutlineHealthAndSafety size={50}/>
            </div>
             
     <ul className="header-menu">              
      <li className="menu-items">
         <div className="head-drop" onClick={()=>setActive(!active)}>
          <p>Productos</p>
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
        </div>                     
        </li>
     </ul>
    <CartWidget/>
    </nav>

)
    
}

export default NavBar;