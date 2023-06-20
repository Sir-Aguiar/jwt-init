import connectDatabase from "./database/database.js";
import { app } from "./server/server.js";

connectDatabase()
  .then(() => {
    app.listen(8080, () => console.log("Server running at port 8080"));
  })
  .catch((error) => {
    console.log(error);
  });
