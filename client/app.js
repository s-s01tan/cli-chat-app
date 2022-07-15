const inquirer = require('inquirer')
const welcomeMenu = require('./welcome')

const run = async (inquirer) => {
    await welcomeMenu(inquirer)
}

run(inquirer)