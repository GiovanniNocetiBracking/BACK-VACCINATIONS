const { User } = require("src/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const doLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ error: "contraseña no válida" });
    const token = jwt.sign(
      {
        name: user.name,
        id: user._id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );
    res.status(200).json({
      error: null,
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = doLogin;
