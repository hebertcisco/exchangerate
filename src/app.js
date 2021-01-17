require("dotenv/config");

const express = require("express");
const cors = require("cors");

const routes = require("./routes");

require("./database");

require("./jobs/exchangerate.job");
require("./jobs/telegram.job");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

module.exports = app;
