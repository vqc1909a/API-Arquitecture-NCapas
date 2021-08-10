const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

const app = express();
const apiRoutes = express();
const container = require("./startup/container");
const HomeRoute = container.resolve("HomeRoute");
const connectDB = require("./config/db");
const {ErrorMiddleware, NotFoundMiddleware} = require("./middlewares");
require("dotenv").config();


connectDB()
.then(() => {
  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.use("/home", HomeRoute);
  app.use("/v1/api", apiRoutes)

  app.use(NotFoundMiddleware);
  app.use(ErrorMiddleware);
  
  app.listen(process.env.PORT, () => {
    return console.log(process.env.APPLICATION_NAME + " API running on port " + process.env.PORT);
  })
})
