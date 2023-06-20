import { User } from "../../database/models/User.js";

/** @type {import ('express').RequestHandler}  */
export const GetUserController = async (req, res) => {
  const id = req.user_id;
  try {
    const user = await User.findById(id, "-password");

    // Redundância
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json({ error: null, user });
  } catch (error) {
    res.status(500).json({ error });
  }
};
