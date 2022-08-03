import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
      Bienvenidxs! Esta es una aplicación para administración de presupuesto personal.
      Si ya es usuario, <Link to= "/user">ingrese aqui</Link> , si no lo es, registrese. 
      
      <Link to= "/usercreate">
      <button> Registrarse </button>
      </Link>
    </div>
  )
}

export default Landing;