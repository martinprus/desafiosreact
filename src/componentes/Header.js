import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-fluid d-flex justify-content-between align-items-center Header bg-dark bg-gradient text-white">  
      <span>
        <Link to="/">
        <img
          className="img-fluid m-3 d-inline"
          src="https://thumbs.dreamstime.com/b/vector-logo-game-pad-store-173837591.jpg"
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
