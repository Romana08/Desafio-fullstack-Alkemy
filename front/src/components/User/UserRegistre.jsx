import React, { useState } from 'react';

import { userCreate } from "../../redux/action/actions.js";

export function validate (user){
    let error ={};
    if (!user.name){
        error.name = "El nombre es requerido"

    }
}



//_________________________________//

const UserRegistre = () => {



  return (
    <div>
        <div>
            <form action="registrarse">
                <div>
                <label>Nombre: </label>
                <input type="text" name= "name"/>
                </div>
                
                
                <div>
                <label>Contraseña: </label>
                <input type="text" />
                </div>
                <div>
                <label>email: </label>
                <input type="text" />
                </div>
                <div>
                    <label htmlFor="">edad:</label>
                </div>    
            <input type="text" />
            </form>
        </div>
    </div>
  )
}

export default UserRegistre