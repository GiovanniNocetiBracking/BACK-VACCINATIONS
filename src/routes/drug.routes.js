const express = require("express");
const router = express.Router();

const { validateToken } = require("src/middlewares");

const {
  allDrugs,
  createDrug,
  editDrug,
  deleteDrug,
} = require("src/controllers/drug");

router.get("", validateToken, allDrugs);
router.post("", validateToken, createDrug);
router.put("/:drugId", validateToken, editDrug);
router.delete("/:drugId", validateToken, deleteDrug);

module.exports = router;
