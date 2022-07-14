const colors = require('colors')

const welcomeWave = () => `
⣾⡟⠀⢰⡿⠁⢠⣿⡏⠁⣰⣾⠟⠉⠉⠉⠛⣿⣶⠈⢻⣷⡀⠈⣿⣧⠈⣿⣧⠀
⣿⡇⠀⣿⡇⠀⣿⣿⠀⢸⣿⡇⢰⣿   ⢸⣿⠀⢸⣿⡇⠀⣿⣿⠀⣿⣿⠀
⣿⡇⠀⢿⡇⠀⢻⣿⡀⠘⣿⣇⠘⠻⢷⣶⣶⠿⠛⣠⣾⡟⠀⣠⣿⡏⢠⣿⡏`.cyan

const appInfo = (host, port) => `---------------------------------------\n${'•'.green} CLI Chat App Started Successfully` + '\n' +
    `${'•'.green} Host: ${host} ` + '\n' +
    `${'•'.green} Port: ${port}\n---------------------------------------`

module.exports = {
    welcomeWave,
    appInfo
}