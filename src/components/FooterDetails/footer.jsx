import { MdOutlineHealthAndSafety } from "react-icons/md";
import "./Footer.css";

function Footer(){
    return(
        <footer id="page-footer">
            <div>
                <MdOutlineHealthAndSafety size={50}/>
            </div>
          
            <h2>Hecho por Juan Suarez 2023, <a href="https://github.com/juancho3000">Click para ver github</a></h2>
        </footer>
    )
}
export default Footer;