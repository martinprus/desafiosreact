import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="container-fluid bg-light d-flex justify-content-between align-items-center">  
      <span>
        <img
          className="img-fluid m-3 d-inline"
          src="https://svgsilh.com/svg/1400845.svg"
          alt=""
          width="160"
          height="160"
        />
      </span>

      <NavBar />
    </header>
  );
}

export default Header;
