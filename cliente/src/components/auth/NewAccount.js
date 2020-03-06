import React, {useState} from "react";
import {Link} from 'react-router-dom'


const NewAccount = () => {
  
  //state form
  const [user, setUser] = useState({
      nombre:"",
      email:"",
      password:"",
      password2:""
  })

  // destructuring user
  const { nombre, email, password, password2 } = user;

  


  const onChangeLog = e => {
     setUser({
       ...user,
       [e.target.name] : e.target.value      
     })
  };

  const onSubmitLog = e => {
     e.preventDefault();


     // validation


     
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>

        <form
          onSubmit={onSubmitLog}
        >
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
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
        <Link to={"/"} className="enlace-cuenta">iniciar sesión</Link>
      </div>
    </div>
  );
};


export default NewAccount;
