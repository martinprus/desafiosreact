import NavBar from "./NavBar"

function Footer(props) {
  return (
    <>
    <p>Acá el contador también es: {props.contador}</p>
    <NavBar/>
    </>
  )
}

export default Footer