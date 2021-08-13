const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  nameENG: {
    type: String,
    required: true,
    unique: true,
  },
  nameRUS: {
    type: String,
  },
  ranobeUrl: {
    type: String,
  },
  lastChapter: {
    type: String,
  },
  image: {
    type: String,
  },
  synopsis: {
    type: String,
  },
  raiting: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Favorites", userSchema);

/* 
const mongoose = require("mongoose");
const Ranobe = mongoose.Schema({
  nameRUS: {
    type: String,
  },
  nameENG: {
    type: String,
  },
  url: {
    type: String,
  },
  lastChapter: {
    type: String,
  },
});
*/
