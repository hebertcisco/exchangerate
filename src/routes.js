const express = require("express");
const statusController = require("./controllers/StatusController");
const exchangeRateController = require("./controllers/ExchangeRateController");

const routes = express.Router();

routes.get("/", async (req, res) => {
  res.redirect("/v1/status");
});
routes.get("/v1/status", async (req, res) => {
  await statusController.show(req, res);
});

routes.get("/v1/rates", async (req, res) => {
  const { base } = req.query;
  await exchangeRateController.read(req, res, base);
});

module.exports = routes;
