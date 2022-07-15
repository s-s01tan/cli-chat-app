const axios = require('axios')
const { base_url } = require('../config')()


// User Registration
const registerUser = async (inquirer) => {
    let passTmp = ''
    inquirer.prompt([
        {
            name: 'fullName',
            message: 'Full Name: ',
            validate: function (input) {
                const done = this.async()
                if (input.length < 3) {
                    done('Fullname must be at least 3 characters long;')
                    return
                }
                done(null, true)
            }
        },
        {
            name: 'username',
            message: 'Username: ',
            validate: function (input) {
                const done = this.async()

                if (input.length < 3) {
                    done('Username must be at least 3 characters long;')
                    return
                }

                axios.post(`${base_url}/user/check?by=username`, {
                    value: input
                }).then(response => {
                    if (response.hasFound) {
                        done('Username has already been taken;')
                        return
                    }
                    done(null, true)
                })
            }
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