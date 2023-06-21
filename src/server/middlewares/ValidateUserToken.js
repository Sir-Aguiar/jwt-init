import "dotenv/config";
import jwt from "jsonwebtoken";

/** @type {import ('express').RequestHandler}  */
export const ValidateUserToken = async (req, res, next) => {
  const authHeader = req.header("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  const secret = process.env.SECRET;

  if (!token) {
    return res.status(400).json({ error: "Token ausente" });
  }

  try {
    const { payload } = jwt.verify(token, secret, { complete: true });
    req.user_id = payload.id;
    next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};
