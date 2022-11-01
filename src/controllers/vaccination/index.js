const allVaccinations = require("src/controllers/vaccination/allVaccinations");
const createVaccination = require("src/controllers/vaccination/createVaccination");
const editVaccination = require("src/controllers/vaccination/editVaccination");
const deleteVaccination = require("src/controllers/vaccination/deleteVaccination");

module.exports = {
  allVaccinations,
  createVaccination,
  editVaccination,
  deleteVaccination,
};
