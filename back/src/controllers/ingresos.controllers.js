 import { Ingresos } from "../models/Ingresos.js";

 export const getIncome = async (req,res) =>{
    const { name } = req.query;
    const incomeAll= await Ingresos.findAll();
    res.json(incomeAll)

  res.send("Estos son todos sus ingresos");
 }

export const createIncome = async (req, res)=>{
  const { name, price, cantidad, descripction } = req.body;
  Ingresos.create({
    name: name,
    price: price,
    cantidad: cantidad,
    descripction: descripction
  })
  console.log("se ha agregado un nuevo ingreso");
}

export const deleteIncome = async (req, res) =>{
  const {id} = req.params;
  try {
    await Ingresos.destroy({
      where: {
        id,
      }
    })
    res.sendStatus(200)

  } catch (error) {
    res.sendStatus(500).json({messege: "Se ha detectado un erroe", error})
  }
}

export const editIncome = async (req, res) =>{
  const {id} = req.params;
  const { name, price, cantidad, description } = req.body;
  const editIncome= await Ingresos.findByPk(id)
    editIncome.name = name,
    editIncome.price = price,
    editIncome.cantidad= cantidad,
    editIncome.descripction= description
  await editIncome.save();
  res.json(editIncome);
}

export const getOneIncome = async (req, res) =>{
  const {name} =req.params;
try {
  const getOneIn = await Ingresos.findOne({
    where:{
      name,
    }
  })
  console.log(getOneIn);
  res.json(getOneIn);

} catch (error) {
  res.sendStatus(500).json({ messege: "No se encontro el ingreso que menciona", error})
}


}
