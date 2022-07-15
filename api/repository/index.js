// Classes
const UserRepository = require('./user')
const MessageRepository = require('./message')
const RoomRepository = require('./room')

// Repositories
const userRepository = new UserRepository()
const messageRepository = new MessageRepository()
const roomRepository = new RoomRepository()

module.exports = {
    userRepository,
    messageRepository,
    roomRepository
}