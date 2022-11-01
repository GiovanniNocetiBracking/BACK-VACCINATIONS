const express = require("express");
const router = express.Router();

const { validateToken } = require("src/middlewares");
const { validateVaccination } = require("src/utils");

const {
  allVaccinations,
  createVaccination,
  editVaccination,
  deleteVaccination,
} = require("src/controllers/vaccination");

router.get("", validateToken, allVaccinations);
router.post("", validateToken, validateVaccination, createVaccination);
router.put("/:vaccinationId", validateToken, editVaccination);
router.delete("/:vaccinationId", validateToken, deleteVaccination);

module.exports = router;
