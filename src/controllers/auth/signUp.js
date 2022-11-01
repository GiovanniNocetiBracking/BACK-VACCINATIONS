const { User } = require("src/models");
const bcrypt = require("bcrypt");

const doSignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({
      where: { email: email },
    });
    if (existingUser)
      return res.status(400).json({ error: "El usuario ya fue registrado" });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = doSignUp;
