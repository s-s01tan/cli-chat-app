// User Login
const loginUser = async (inquirer) => {
    inquirer.prompt([
        {
            name: 'username',
            message: 'Username: '
        },
        {
            name: 'password',
            message: 'Password: ',
            type: 'password'
        }
    ]).then(answers => {
        console.log(answers)
    })
}

module.exports = loginUser