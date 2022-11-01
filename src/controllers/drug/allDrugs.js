const { Drug } = require("src/models");

const allDrugs = async (req, res, next) => {
  try {
    const drugs = await Drug.findAll();
    res.status(200).json(drugs);
  } catch (err) {
    next(err);
  }
};

module.exports = allDrugs;
