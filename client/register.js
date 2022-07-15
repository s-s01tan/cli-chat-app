// User Registration
const registerUser = async (inquirer) => {
    let passTmp = ''
    inquirer.prompt([
        {
            name: 'fullName',
            message: 'Full Name: '
        },
        {
            name: 'username',
            message: 'Username: '
        },
        {
            name: 'password',
            message: 'Password: ',
            type: 'password',
            validate: function (input) {
                const done = this.async()
                if (input.length < 6) {
                    done('Passwords must be at least 6 characters long;')
                    return
                }
                passTmp = input
                done(null, true)
            }
        },
        {
            name: 're_password',
            message: 'Confirm Password: ',
            type: 'password',
            validate: function (input) {
                const done = this.async()
                if (input !== passTmp) {
                    done('Your password and confirmation password do not match;')
                    return
                }
                done(null, true)
            }
        }
    ]).then(answers => {
        console.log(answers)
    })
}

module.exports = registerUser