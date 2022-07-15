// User Schema Generator
module.exports = (Schema) => {
    return new Schema({
        fullName: {
            type: String,
            trim: true,
            required: true,
            validate: (input) => input.length > 2
        },
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            validate: (input) => input.length > 2
        },
        password: {
            type: String,
            trim: true,
            required: true,
            validate: (input) => input.length > 6
        },
    }, { timestapms: true })
}