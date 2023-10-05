import { ProductsArray } from "./products-array";
import { useState } from "react"
/*import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
;*/

function NavBar () {
   const [active, setActive] = useState(false);
    return(
        <nav>
        <ul className="header-menu">
            {ProductsArray.map((menu, index) => {
                
                return(
                    
                    <li className="menu-items" key={index}>
                        <div className="head-drop" onClick={() => setActive(!active)}>
                            {menu.titulo}
                            <div className="drop-inside">
                            {active && <h6>{menu.submenu[0].subtitle}</h6>}
                            {active && <h6>{menu.submenu[1].subtitle}</h6>}
                            {active && <h6>{menu.submenu[2].subtitle}</h6>}
                            {active && <h6>{menu.submenu[3].subtitle}</h6>}
                      </div>
                            </div>
                            
                    </li>
                )
            })}
        </ul>
    </nav>
)
    
}

export default NavBar;