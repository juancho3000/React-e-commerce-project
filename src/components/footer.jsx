import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ItemsList } from "./item-list";

function Footer(){
    const [on, setOn] = useState(false)
    return(
        <footer id="page-footer">
            <div>
                <MdOutlineHealthAndSafety size={50}/>
            </div>
            <ul>
                 {ItemsList.map((menu, index) => {
                    return(
                          <li key={index}>
                    <h3 onClick={() => setOn(!on)}>Productos</h3>
                    <h4>
                    {on &&
                        <div>
                            <img alt="prod-pic">{menu.image}</img>
                            <p>{menu.descripcion}</p>
                            <h5>{menu.precio}</h5>
                        </div>
                        }
                    </h4>
                </li>
                    )
            })}
            </ul>
            <h2>Hecho por Juan Suarez 2023, <a href="https://github.com/juancho3000">Click para ver github</a></h2>
        </footer>
    )
}
export default Footer;