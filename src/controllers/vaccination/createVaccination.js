const { Vaccination } = require("src/models");

const createVaccination = async (req, res, next) => {
  try {
    const { name, drugId, dose, date } = req.body;
    const vaccinations = await Vaccination.create({
      name,
      drug_id: drugId,
      dose,
      date,
    });
    res.status(201).json(vaccinations);
  } catch (err) {
    next(err);
  }
};

module.exports = createVaccination;
