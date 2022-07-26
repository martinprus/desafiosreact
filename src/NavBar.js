import Button from 'react-bootstrap/Button'

function NavBar() {
  return (    
      <nav className="navbar navbar-light ">
        <a className = "nav-item nav-link mx-2" href="google.com">Productos</a>
        <a className = "nav-item nav-link mx-2" href="google.com">Nosotros</a>
        <a className = "nav-item nav-link mx-2" href="google.com">Carrito</a>
        <Button variant = "danger">LogOut</Button>
      </nav>    
  );
}

export default NavBar;