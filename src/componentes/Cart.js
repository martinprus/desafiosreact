import { context } from "./CartContext";
import { useContext, useState } from "react";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cart = () => {
  const MySwal = withReactContent(Swal);
  const { cart, getItemPrice, Clear } = useContext(context);

  const [checkout, setCheckOut] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const ordersCollection = collection(db, "orders");

  const handleChangeName = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setName(value);
  };

  const handleChangeMail = (e) => {
    const input = e.target;
    const value = input.value;
    setMail(value);
  };

  const handleChangePhone = (e) => {
    const input = e.target;
    const value = input.value;
    setPhone(value);
  };

  const sendOrder = () => {
    const order = {
      date: serverTimestamp(),
      buyer: { name: name, email: mail, phone: phone },
      items: { ...cart },
      total: getItemPrice(),
    };

    const request = addDoc(ordersCollection, order);
    request
      .then((response) => {
        MySwal.fire({
          title: "Éxito!",
          text: `Su pedido fue registrado correctamente con el ID ${response.id}`,
          icon: "success",
          confirmButtonText: "Regresar",
        });
        Clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeCheckOut = () => {
    setCheckOut(true);
  };

  if (cart.length > 0) {
    return (
      <>
        <div className="row container-fluid text-white">
          <div className="col-8 p-3">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
            <p className="h2 text-center">
              Total a pagar: <strong>${getItemPrice()}</strong>
            </p>
            <div className="d-flex flex-row justify-content-center">
            <button onClick={Clear} className="btn btn-lg btn-warning m-5">
              Limpiar Carrito
            </button>
            <button
              onClick={changeCheckOut}
              className="btn btn-lg btn-success m-5"
            >
              Realizar checkout
            </button>
            </div>
          </div>
          {checkout && (
            <div className="col-4 p-3 text-center border rounded mt-4">
              <div className="d-flex flex-row align-items-center justify-content-center m-2">
                <h4 className="pt-1">Nombre completo: </h4>
                <input onChange={handleChangeName} type="text" />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center m-2">
                <h4 className="pt-1">E-mail: </h4>
                <input onChange={handleChangeMail} type="email" />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center m-2">
                <h4 className="pt-1">Teléfono: </h4>
                <input onChange={handleChangePhone} type="number" />{" "}
              </div>
              <button
                onClick={sendOrder}
                className="btn btn-lg btn-primary mt-5"
              >
                {" "}
                Confirmar compra{" "}
              </button>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container text-center">
          <h1 className="h1  m-5">Aún no tienes productos en el carrito</h1>
          <Link className="h2 m-5" to="/">
            Volver a la tienda
          </Link>
        </div>
      </>
    );
  }
};

export default Cart;
