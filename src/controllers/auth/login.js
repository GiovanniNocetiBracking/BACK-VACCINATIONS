const { User } = require('src/models')
const { Bcrypt, Jwt } = require('src/utils')

/**
 * It receives a request, checks if the user exists, checks if the password is valid, and if so, it
 * returns a token
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is the next middleware function in the stack.
 * @returns A token
 */

const doLogin = async (req, res, next) => {
  try {
    const jwt = new Jwt()
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
      res.status(400).json({ error: 'Usuario no encontrado' })
      return
    }
    const validPassword = await Bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      res.status(400).json({ error: 'contraseña no válida' })
      return
    }
    const token = jwt.sign({ id: user.id, email: user.email }, false, '1h')
    res.status(200).json({ token: token })
  } catch (err) {
    next(err)
  }
}

module.exports = doLogin
