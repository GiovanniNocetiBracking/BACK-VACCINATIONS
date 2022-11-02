const bcrypt = require('bcrypt')

class Bcrypt {
  static async hash(password) {
    return bcrypt.hash(password, 10)
  }

  static async compare(password, hash) {
    return bcrypt.compare(password, hash)
  }
}

module.exports = Bcrypt
