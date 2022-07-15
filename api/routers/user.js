const { Router } = require('express')
const { userRepository } = require('../repository')
const userRouter = Router()

userRouter.post('/check', async (req, res) => {
    const { by } = req.query // ?by=username or ?by=fullname
    const { value } = req.body // value comes in body

    var hasFound = false
    switch (by) {
        case 'username': {
            if (await userRepository.findByUsername(value)) hasFound = true
        } break
        case 'fullname': {
            if (await userRepository.findByFullname(value)) hasFound = true
        } break
        default: {
            // leaving 'hasFound' false
        } break
    }

    return res.json({ hasFound })
})

userRouter.post('/', async (req, res) => {
    // rest time
})

module.exports = userRouter