const mongoose = require("mongoose");
const RANOBE = require("../models/ranobe_model");

exports.getFavorites = async (req, res) => {
  RANOBE.find({}, (err, docs) => {
    if (err) {
      console.log("ERR: ", err);
      return res.status(400).json({ err: "Internal ERROR db" }).end();
    } else {
      if (docs.length === 0) {
        return res.status(200).json({ message: "List is empty" }).end();
      } else {
        console.table(docs);
        return res.status(200).json({ list: docs }).end();
      }
    }
  });
};

exports.getOneFavRanobe = async (req, res) => {
  RANOBE.findOne({
    nameENG: req.body.nameENG,
  }).then((doc) => {
    if (!doc) {
      console.log("Empty");
      return res.status(200).json({ message: "This ranobe don't exist" }).end();
    } else {
      return res.status(200).json({ doc: doc }).end();
    }
  });
};

exports.addFavorites = async (req, res) => {
  console.table(req.body);
  var newRanobe = {
    nameENG: req.body.nameENG,
    nameRUS: req.body.nameRUS,
    ranobeUrl: req.body.ranobeUrl,
    lastChapter: req.body.lastChapter,
    raiting: req.body.raiting,
    image: req.body.image,
  };

  RANOBE.create(newRanobe)
    .then((docs) => {
      return res.status(200).json({ docs: docs }).end();
    })
    .catch((err) => {
      console.log(`Error: ` + err);
      return res
        .status(400)
        .json({ err: "Internal err $ : " + err })
        .end();
    });
};

exports.updateRanobe = async (req, res) => {
  RANOBE.updateOne(
    {
      nameENG: req.body.nameENG,
    },
    req.body.updateData,
    (err) => {
      if (err) {
        console.log(`Error: ` + err);
        return res
          .status(400)
          .json({ err: "Internal err: " + err })
          .end();
      } else {
        return res.status(200).json({ message: "success" }).end();
      }
    }
  );
};

exports.deleteRanobe = async (req, res) => {
  RANOBE.deleteOne(
    {
      nameENG: req.body.nameENG,
    },
    (err) => {
      if (err) {
        console.log(`Error: ` + err);
        return res
          .status(400)
          .json({ err: "Internal err: " + err })
          .end();
      } else {
        return res.status(200).json({ message: "success" }).end();
      }
    }
  );
};
