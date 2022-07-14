// Express
const express = require('express')
const app = express()
// Server
const { createServer } = require('http')
const server = createServer(app)
// Socket
const { Server } = require('socket.io')
const io = new Server(server)

const { config } = require('dotenv')
const { welcomeWave, appInfo } = require('./art')
config()

// Listening event
const { host, port } = require('./config')(process.env.NODE_ENV)
server.listen(port, async () => {
    console.log(welcomeWave())
    console.log(appInfo(host, port))
})