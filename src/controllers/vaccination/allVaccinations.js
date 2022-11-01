const { Vaccination } = require("src/models");

const allVaccionations = async (req, res, next) => {
  try {
    const vaccinations = await Vaccination.findAll();
    res.status(200).json(vaccinations);
  } catch (err) {
    next(err);
  }
};

module.exports = allVaccionations;
