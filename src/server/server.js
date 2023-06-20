import "dotenv/config";
import express from "express";
import cors from "cors";
import { routes } from "./routes.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(routes);

export { app };
