const jwt = require('jsonwebtoken')

class Jwt {
  constructor() {
    this.secret = process.env.TOKEN_SECRET
    this.algorithm = process.env.TOKEN_ALGORITHM
    this.expiresIn = process.env.TOKEN_EXPIRATION
    this.options = { algorithm: this.algorithm }
  }

  sign(payload, expires, expiresIn) {
    return jwt.sign(payload, this.secret, {
      ...this.options,
      expiresIn: expiresIn || this.expiresIn,
      ...(expires && { expires }),
    })
  }

  verify(token) {
    return jwt.verify(token, this.secret, this.options)
  }
}
module.exports = Jwt
