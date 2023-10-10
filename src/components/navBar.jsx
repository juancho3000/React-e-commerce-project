import { ItemsList }  from "./item-list";
import { useState } from "react"
import CartWidget from "./cartWidget";
import { MdOutlineHealthAndSafety } from "react-icons/md";
/*import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
;*/

function NavBar () {
   const [active, setActive] = useState(false);
    return(
        <nav id="navbar-page">
            <div className="nav-icon-brand">
                <MdOutlineHealthAndSafety size={50}/>
            </div>
             
        <ul className="header-menu">
            {ItemsList.map((menu, index) => {
                
                return(
                    
                    <li className="menu-items" key={index}>
                        <div className="head-drop" onClick={() => setActive(!active)}>
                            Prouctos
                            <div className="drop-inside">
                            {active &&
                        <div>
                            <p>{menu.titulo}</p>
                        </div>
                        }
                      </div>
                            </div>
                            
                    </li>
                )
            })}
        </ul>
            <CartWidget/>
    </nav>

)
    
}

export default NavBar;