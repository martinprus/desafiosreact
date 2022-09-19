import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-fluid d-flex justify-content-between align-items-center Header bg-dark bg-gradient text-white">  
      <span>
        <Link to="/">
        <img
          className="img-fluid m-3 d-inline"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWI0LV5RKj65bxXyONI4PGpiB1CAooramPHlMUZZG6DwflMDNChS3rwIDNNWC4dAYh1w&usqp=CAU"
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
