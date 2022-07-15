require('dotenv')
const node_env = process.env.NODE_ENV || 'development'

module.exports = () => {
    const config = {
        test: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017/cli_chat_db',
            base_url: 'http://localhost:3000'
        },
        development: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017/cli_chat_db',
            base_url: 'http://localhost:3000'
        },
        production: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017/cli_chat_db',
            base_url: 'http://localhost:3000'
        }
    }

    return config[node_env]
}