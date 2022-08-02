import app from '../back/src/app.js';
import { sequelize } from '../back/src/database/database.js';

import '../back/src/models/User.js';
import './src/models/Ingresos.js';
import '../back/src/models/Egresos.js'

 const port= 3000;


async function main (){

  try {
    await sequelize.sync({force: false})
    await sequelize.authenticate();
    console.log("todo re bien");
    app.listen(port)
      console.log("Mi port es " + port)

  } catch (error) {
    console.error("parece que no funca", error);
  }

}

main();

