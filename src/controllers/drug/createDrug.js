const { Drug } = require("src/models");

const createDrug = async (req, res, next) => {
  try {
    const { name, approved, minDose, maxDose, availableAt } = req.body;
    const drug = await Drug.create({
      name,
      approved,
      min_dose: minDose,
      max_dose: maxDose,
      available_at: availableAt,
    });
    res.status(201).json(drug);
  } catch (err) {
    next(err);
  }
};

module.exports = createDrug;
