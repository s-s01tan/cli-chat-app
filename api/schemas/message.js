// Message Schema Generator
module.exports = (Schema) => {
    return new Schema({
        sentBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        sentTo: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        roomId: {
            type: Schema.Types.ObjectId,
            ref: 'Room',
            required: true,
            index: true
        },
        content: {
            type: String,
            required: true,
            trim: true,
            validate: (input) => input.trim().length > 0
        }
    }, { timestapms: true })
}