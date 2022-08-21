const express = require("express");

const routes = express.Router();

const Workout = require("../models/workout-model");

routes.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

routes.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// POST a new workout
routes.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
  // res.json({ mssg: "POST a workout" });
});
routes.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});
routes.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a workout" });
});

module.exports = routes;
