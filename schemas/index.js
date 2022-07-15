// Imports and Exports all schemas from central point
const generateUserSchema = require('./user')
const generateRoomSchema = require('./room')
const generateMessageSchema = require('./message')

module.exports = {
    generateUserSchema,
    generateRoomSchema,
    generateMessageSchema
}