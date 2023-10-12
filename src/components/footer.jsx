//import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
//import { ItemListContainer } from "./itemListContainer";

function Footer(){
    //const [on, setOn] = useState(false)
    return(
        <footer id="page-footer">
            <div>
                <MdOutlineHealthAndSafety size={50}/>
            </div>
            <ul>
          
    
                          <li >
                    <h3>Productos</h3>
                    <h4>
                   
                        <div>
                            <img alt="prod-pic"></img>
                            <p>texto</p>
                            <h5>tetxo</h5>
                        </div>
                        
                    </h4>
                </li>
                    
        
            </ul>
            <h2>Hecho por Juan Suarez 2023, <a href="https://github.com/juancho3000">Click para ver github</a></h2>
        </footer>
    )
}
export default Footer;