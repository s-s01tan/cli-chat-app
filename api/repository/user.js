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

    // Searchs user by given username
    async searchByUsername(username) {
        try {
            return await User.findOne({ username: { $regex: username, $options: 'i' } })
        } catch (e) {
            console.log('Database Error: '.red, e)
        }
    }

    // Finds user by given fullname
    async findByFullname(fullName) {
        try {
            return await User.findOne({ fullName })
        } catch (e) {
            console.log('Database Error: '.red, e)
        }
    }

    // Searchs user by given fullname
    async searchByFullname(fullName) {
        try {
            return await User.findOne({ fullName: { $regex: fullName, $options: 'i' } })
        } catch (e) {
            console.log('Database Error: '.red, e)
        }
    }
}

module.exports = UserRepository