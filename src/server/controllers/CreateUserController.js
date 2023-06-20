import { User } from "../../database/models/User.js";
import bcrypt from "bcrypt";
import "dotenv/config.js";
/** @type {import ('express').RequestHandler}  */
export const CreateUserController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Este email já está em uso" });
    }

    // Encriptando a senha do usuário
    const hashSalt = bcrypt.genSaltSync(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, hashSalt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(200).json({ error: null, _id: newUser._id });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
