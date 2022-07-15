const { connect, Schema, model } = require('mongoose')
const { db_url } = require('../../config')()
const { generateUserSchema, generateMessageSchema, generateRoomSchema } = require('../schemas')
require('colors')

// Database Connection
connect(db_url, (err) => {
    if (err) return console.log(`${'•'.red} Failed to connect Database;`)
    else console.log(`${'•'.green} Connected Database Successfully;`)
})

// Schemas
const userSchema = generateUserSchema(Schema)
const roomSchema = generateMessageSchema(Schema)
const messageSchema = generateRoomSchema(Schema)

// Models
const User = model('User', userSchema)
const Message = model('Message', messageSchema)
const Room = model('Room', roomSchema)

module.exports = {
    User,
    Message,
    Room
}