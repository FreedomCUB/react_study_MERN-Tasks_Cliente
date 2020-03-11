import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertContext from '../../context/alerts/alertContext';


const NewAccount = () => {

  //context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;



  //state form
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  // destructuring user
  const { name, email, password, password2 } = user;

  const onChangeLog = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitLog = e => {
    e.preventDefault();

    // validation
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password2.trim() === ""
    ) {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    if (password.length < 6) {
      showAlert(
        "El password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    if (password !== password2) {
      showAlert(
        "Los password no son iguales ",
        "alerta-error"
      );
      
    }
  };

  return (
    <div className="form-usuario">
      {alert ? (<div className={`alerta ${alert.category}`}> {alert.msg} </div>) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>

        <form onSubmit={onSubmitLog}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChangeLog}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChangeLog}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChangeLog}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password2">Confirmar Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirmar Password"
              value={password2}
              onChange={onChangeLog}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear cuenta"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
