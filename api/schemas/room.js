// Room Schema Generator
module.exports = (Schema) => {
    return new Schema({
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        roomPartner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        }
    }, { timestapms: true })
}