import { Egresos } from '../models/Egresos.js';

export const getExpenses = async (req, res) =>{
  const allExpenses = await Egresos.findAll()
  res.json(allExpenses);
  res.send( "estos fueron todos sus gastos");
};

export const createExpense = async (req, res) =>{
  const {name, price, amount, description} = re.body;
  await Egresos.create({
    name: name,
    price: price,
    amount: amount,
    description: description
  })
  console.log("Se ha agregado un nuevo egreso");
};

export const deleteExpense = async (req, res) =>{
  const { id} = req.params;
  await Egresos.destroy({
    where:{
      id,
    }
  })
  return res.sendStatus(204);
}

export const editExpense = async (req, res) =>{
  const { id } = req.params;
  const { name, price, amount, description} =req.body;
  const expenseEdit = await Egresos.findByPk(id);
  expenseEdit.name= name;
  expenseEdit.price = price,
  expenseEdit.amount= amount,
  expenseEdit.description= description;

  await expenseEdit.save();
  res.json(expenseEdit)
}

export const getOneExpense = async (req, res) =>{
  const { id } = req.params;
  const getOneEx = await Egresos.findOne({
    where:{
      id,
    }
  })
  res.json(getOneEx)
}
