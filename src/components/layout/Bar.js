import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Bar = () => {
  const authContext = useContext(AuthContext);
  const { user, authUser, logOut } = authContext;

  useEffect(() => {
    authUser();
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button 
        className="btn btn-blank cerrar-sesion"
       onClick={() => logOut()}
        >Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Bar;
