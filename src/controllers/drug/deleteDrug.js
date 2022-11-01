const { Drug } = require("src/models");

const deleteDrug = async (req, res, next) => {
  try {
    const { drugId } = req.params;
    await Drug.destroy({
      where: { id: drugId },
    });
    res.status(200).json("registro de medicamento borrado exitosamente");
  } catch (err) {
    next(err);
  }
};

module.exports = deleteDrug;
