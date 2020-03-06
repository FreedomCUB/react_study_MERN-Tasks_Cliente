import React, {useState} from "react";
import {Link} from 'react-router-dom'


const Login = () => {

  //state form
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  // destructuring user
  const { email, password } = user;

  


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
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={onSubmitLog}
        >
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
            <label htmlFor="password">Email</label>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={"/new_account"} className="enlace-cuenta">Crear cuenta</Link>
        <Link to={"/projects"} className="enlace-cuenta">proyectos</Link>
      </div>
    </div>
  );
};

export default Login;
