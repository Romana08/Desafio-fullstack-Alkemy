import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo
export const Ingresos = sequelize.define('ingreso',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING ,
    },
     cantidad :{
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type:DataTypes.TEXT,
    },
  });
