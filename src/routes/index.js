const express = require("express");
const router = express.Router();

const vaccinationRouter = require("src/routes/vaccination.routes");
const drugsRouter = require("src/routes/drug.routes");
const authRouter = require("src/routes/auth.routes");

router.use("/vaccination", vaccinationRouter);
router.use("/drugs", drugsRouter);
router.use("/auth", authRouter);

module.exports = router;
