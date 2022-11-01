const { Drug } = require("src/models");

const editDrug = async (req, res, next) => {
  try {
    const { drugId } = req.params;
    const drug = await Drug.update(req.body, {
      where: { id: drugId },
      returning: true,
      plain: true,
    });
    res.status(200).json(drug[1]);
  } catch (err) {
    next(err);
  }
};

module.exports = editDrug;
