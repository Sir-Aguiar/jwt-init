import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController.js";
import { LogInUserController } from "./controllers/LogInUserController.js";
import { GetUserController } from "./controllers/GetUserController.js";
import { ValidateUserToken } from "./middlewares/ValidateUserToken.js";
const routes = Router();

routes.post("/user/signup", CreateUserController);

routes.get("/user/signin", LogInUserController);
routes.get("/user", ValidateUserToken, GetUserController);

export { routes };
