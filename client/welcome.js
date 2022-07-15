const loginUser = require('./login')
const quitApp = require('./quit')
const registerUser = require('./register')

// Welcome Menu
const welcomeMenu = (inquirer) => {
    inquirer.prompt([
        {
            name: 'menuOperation',
            message: 'Welcome to CLI Chat App',
            type: 'list',
            choices: ['Login', 'Register', 'Quit']
        }
    ]).then(answers => {
        switch (answers.menuOperation) {
            case 'Login': {
                loginUser(inquirer)
            } break
            case 'Register': {
                registerUser(inquirer)
            } break
            case 'Quit': {
                quitApp()
            } break
            default: {
                quitApp()
            } break
        }
    })
}

module.exports = welcomeMenu