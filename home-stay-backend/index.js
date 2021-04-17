// index.js
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const hotelRouter = require("./routes/hotelRouter");

const app = express();

// Add body-parser middleware to automatically parse JSON requests
app.use(bodyParser.json());
// Requests done to the base path /todo should go through the todoRouter
app.use("/hotel", hotelRouter);

const connectionUrl =
  "mongodb+srv://homestaybackend:1234@cluster0.8ltov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const startApplication = async () => {
  await mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Successfully connected to MongoDB");
  await app.listen(8000);
  console.log("Listening on 8000...");
};

startApplication();

// const mongoose = require("mongoose");
// const express = require("express");
// const router = express.Router();

// mongoose
//   .connect(connectionUrl)
//   .then(() => console.log("Connected to mongoDb"))
//   .catch((err) => console.error("Could not connect to mongoDB..."));

// const hotelSchema = new mongoose.Schema({
//   name: String,
//   address: String,
//   tags: [String],
//   location: String,
//   phone: Number,
//   isBooked: Boolean,
//   price: Number,
// });

// const Hotel = mongoose.model("Hotel", hotelSchema);

// async function createHotel() {
  // const hotel = new Hotel({
  //   name: "jaffna Hotel",
  //   address: "clock tower road. Jaffna",
  //   tags: ["ac", "swimming pool", "hot water shower"],
  //   location: "jaffna",
  //   phone: 0775214562,
  //   isBooked: false,
  //   price: 4500,
  // });
//   const result = await hotel.save();
//   console.log(result);
// }

// async function getHotels() {
//   const hotels = await Hotel.find({ name: "jaffna Hotel", isBooked: false })
//     .limit(10)
//     .sort({ name: 1 })
//     .select({ name: 1, tags: 1 });
//   console.log(hotels);
// }

// async function updateHotels(id) {
//   const hotel = await Hotel.findByIdAndUpdate(
//     id,
//     {
//       $set: {
//         isBooked: false,
//         phone: "0115246587",
//       },
//     },
//     { new: true }
//   );

//   console.log(hotel);
// }

// async function removeHotels(id) {
//   const hotel = await Hotel.findByIdAndRemove(id);
//   console.log(hotel);
// }

// // createHotel();
// // getHotels();
// // updateHotels("607a702f2a68693e683ee3cb");
// removeHotels("607a702f2a68693e683ee3cb");
