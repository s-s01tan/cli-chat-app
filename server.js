// Express
const express = require('express')
const app = express()
// Server
const { createServer } = require('http')
const server = createServer(app)
// Socket
const { Server } = require('socket.io')
const io = new Server(server)

// Middlewares
app.use(express.urlencoded())
app.use(express.json())

// Routers
const { userRouter, messageRouter, roomRouter } = require('./api/routers')
app.use('/user', userRouter)
app.use('/message', messageRouter)
app.use('/room', roomRouter)

// Request Logger
const morgan = require('morgan')
app.use(morgan('tiny'))

// Listening event
const { host, port } = require('./config')()
const { welcomeWave, appInfo } = require('./art')
server.listen(port, async () => {
    console.log(welcomeWave())
    console.log(appInfo(host, port))
})