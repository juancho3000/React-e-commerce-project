import CartWidget from "../cartDetails/cartWidget";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import "./navBarstyle.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar-page">
      <div className="nav-icon-brand">
        <Link to={"/"}>
          <MdOutlineHealthAndSafety size={50} />
        </Link>
      </div>

      <div>
        <h1 style={{color: "white"}}>Medicinas Juan Suarez</h1>
      </div>
      <Link to={"/CartProducts"}>
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
