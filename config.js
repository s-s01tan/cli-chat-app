module.exports = (env) => {
    const config = {
        test: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017/cli_chat_db',
            basic_url: 'http://localhost:3000'
        },
        development: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017/cli_chat_db',
            basic_url: 'http://localhost:3000'
        },
        production: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017/cli_chat_db',
            basic_url: 'http://localhost:3000'
        }
    }

    // return Object.keys(config).includes(env) ? config[env] : config['development']
    return env === 'test' || env === 'development' || env === 'production' ? config[env] : config['development']
}