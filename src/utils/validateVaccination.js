const { Drug } = require("src/models");

const validateVaccination = async (req, res, next) => {
  try {
    const { drugId, dose, date } = req.body;
    const drug = await Drug.findOne({ where: { id: drugId } });
    if (!drug)
      return res.status(400).json({ error: "Medicamento no encontrada" });
    const { min_dose, max_dose, available_at } = drug;
    if (min_dose > dose) {
      return res.status(400).json({ error: "Dosis insuficiente" });
    }
    if (max_dose < dose) {
      return res.status(400).json({ error: "Dosis muy elevada" });
    }
    if (Date.parse(date) < Date.parse(available_at)) {
      return res
        .status(400)
        .json({ error: "El medicamento no esta listo para ser aplicado" });
    }
    next();
  } catch (error) {
    res
      .status(400)
      .json({ error: "la vacunacion es potencialmente peligrosa" });
  }
};

module.exports = validateVaccination;
