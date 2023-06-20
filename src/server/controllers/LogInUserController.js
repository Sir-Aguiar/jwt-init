import { User } from "../../database/models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/** @type {import ('express').RequestHandler}  */
export const LogInUserController = async (req, res) => {
  const { email, password } = req.headers;

  if (!email || !password) {
    return res.status(400).json({ error: "Não foram inseridos dados o suficiente" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1m",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
