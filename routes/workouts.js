const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

routes.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});
routes.post("/", (req, res) => {
  res.json({ mssg: "POST a workout" });
});
routes.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});
routes.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a workout" });
});

module.exports = routes;
