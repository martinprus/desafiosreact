import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="container-fluid d-flex justify-content-between align-items-center Header">  
      <span>
        <Link to="/">
        <img
          className="img-fluid m-3 d-inline"
          src="https://svgsilh.com/svg/1400845.svg"
          alt=""
          width="160"
          height="160"
        />
        </Link>
      </span>
      <NavBar />
    </header>
  );
}

export default Header;
