const express = require("express");
const router = express.Router();
const itemData = require("../controller/data");

const {
  getItem,
  addItem,
  getItemId,
  deleteItem,
  updateItem,
  sortMusic
} = require("../controller/items");

router.get("/sort", (req, res) => sortMusic(req, res, itemData));

router.get("/", getItem);

router.post("/", addItem);

router.get("/:id", getItemId);


router.delete("/:id", deleteItem);

router.put("/:id", updateItem);

module.exports = router;