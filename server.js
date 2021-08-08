const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const controller = require("./controllers/favorites");

const API_PATH = "/api";

app.use(cors());
app.use(express.json());

app.get(API_PATH + "/checkConnetion", (req, res) => {
  return res.status(200).json({ connectionStatus: "online" }).end();
});

app.post("/getRanobeList", (req, res) => {});

//  Favorites
app.post(API_PATH + "/getFavorites", controller.getFavorites);
app.post(API_PATH + "/getOneFavRanobe", controller.getOneFavRanobe);
app.post(API_PATH + "/addFavorite", controller.addFavorites);
app.post(API_PATH + "/deleteFavorite", controller.deleteRanobe);
app.post(API_PATH + "/updateFavorite", controller.updateRanobe);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(
    app.listen(process.env.PORT || 3000, function () {
      console.log("API Working!");
    })
  )
  .catch(function (err) {
    console.log("Mongo err: ", err);
  });
// mongo pass:  VggTbp5QkxkYACA
