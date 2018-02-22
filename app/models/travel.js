const mongoose = require('mongoose')
const Schema = mongoose.Schema

const travelSchema = new Schema ({
    location: {
        type: String,
        required: true
    },
    when: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Travel', travelSchema) //calling mongoose method = model
