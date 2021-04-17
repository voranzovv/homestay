const mongoose = require("mongoose");

// Create a mongoose schema, make title and createdAt be the properties and make them required
const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  tags: [String],
  location: String,
  phone: Number,
  isBooked: Boolean,
  price: Number,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;