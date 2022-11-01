const { Vaccination } = require("src/models");

const deleteVaccination = async (req, res, next) => {
  try {
    const { vaccinationId } = req.params;
    await Vaccination.destroy({
      where: { id: vaccinationId },
    });
    res.status(200).json("registro de vacunacion borrado exitosamente");
  } catch (err) {
    next(err);
  }
};

module.exports = deleteVaccination;
