const { User } = require('../models')

class UserRepository {
    // Database Operations about User

    // Finds user by given username
    async findByUsername(username) {
        try {
            return await User.findOne({ username })
        } catch (e) {
            console.log('Database Error: '.red, e)
        }
    }
}

module.exports = UserRepository