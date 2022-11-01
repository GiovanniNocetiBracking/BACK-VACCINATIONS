const { Vaccination } = require("src/models");

const editVaccionations = async (req, res, next) => {
  try {
    const { vaccinationId } = req.params;
    const vaccinations = await Vaccination.update(req.body, {
      where: { id: vaccinationId },
      returning: true,
      plain: true,
    });
    res.status(200).json(vaccinations[1]);
  } catch (err) {
    next(err);
  }
};

module.exports = editVaccionations;
