import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Ingresos } from './Ingresos.js';
import {Egresos} from './Egresos.js';
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo
 export const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING ,
    },
    password:{
        type: DataTypes.STRING,
    },
     email :{
        type: DataTypes.STRING,
    },
    edad:{
        type:DataTypes.INTEGER,
    },

  });
User.hasMany(Ingresos, {
    foreignKey: 'userId',
    sourceKey: 'id'
  })
  Ingresos.belongsTo(User,{
  foreignKey: 'userId',
  targetId: 'id'
})

User.hasMany(Egresos, {
  foreignKey: 'userId',
  sourceKey: 'id'
})
Egresos.belongsTo(User,{
foreignKey: 'userId',
targetId: 'id'
})

Egresos.belongsToMany(Ingresos,{
  through:'Egresos_Ingresos',
  foreignKey: 'userId'
});
Ingresos.belongsToMany(Egresos,{
  through:'Egresos_Ingresos',
  foreignKey: 'userId'
});
