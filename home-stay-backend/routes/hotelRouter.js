// src/todoRouter.js
const express = require("express");
const Hotel = require("../models/hotel");

const hotelRouter = express.Router();

// List all todos
hotelRouter.get("/", async (_, res) => {
  res.json(await Hotel.find({}));
});

// Read todo by ID
hotelRouter.get("/:hotelId", async (req, res) => {
  const { hotelId } = req.params;
  res.json(await Hotel.findById({ _id: hotelId }));
});

// Delete todo by ID
hotelRouter.delete("/:hotelId", async (req, res) => {
  const { hotelId } = req.params;
  await Hotel.deleteOne({ _id: hotelId });
  res.status(204).send();
});

// Update todo by ID
hotelRouter.put("/:hotelId", async (req, res) => {
  const { name, address, tags, location, isBooked, price } = req.body;
  const { hotelId } = req.params;
  res.json(await Hotel.updateOne({ _id: hotelId }, { name, address, tags, location, isBooked, price }));
});

// Create a hotel
hotelRouter.post("/", async (req, res) => {
  const { name, address, tags, location, isBooked, price } = req.body;
// console.log(req.body)
  res.json(
    await Hotel.create({
      name,
      address,
      tags,
      location,
      isBooked,
      price
    })
  );
});

module.exports = hotelRouter;
