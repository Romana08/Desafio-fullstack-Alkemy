import { User } from '../models/User.js';

export const getUser= async (req,res)=>{
  const {name} = req.query;
    const userAll= await User.findAll();
    res.json(userAll)

  res.send("traer usuarios")
};

export const creatUser= (req,res)=>{
  const { name , password, edad, email } = req.body;
  User.create({
    name: name,
    password: password,
    edad: edad,
    email: email
  })
console.log("se ha creado un nuevo usuario");
};

export const upDelete = async (req,res)=>{
  const {id}= req.params;
  try{
  await User.destroy({
    where: {
      id,
    },
  });

  return res.sendStatus(204);
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

export const upDate = async (req, res)=>{

  try {
    const { id } = req.params;
    const {name, password, email} = req.body;

    const userEdit = await User.findByPk(id)
    userEdit.name = name,
    userEdit.password = password,
    userEdit.mail = email,

    await userEdit.save();
    res.json(userEdit)

  } catch (error) {
    return res.status(500).json({ message: error.message });


  }

};

export const getOneUser = async (req, res) => {

  const { id } = req.params;
  try {
    const getOne = await User.findOne({
      where: {
        id,
      },
    });
    console.log(getOne)
    res.json(getOne);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

