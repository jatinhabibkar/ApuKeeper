const mongoose = require('mongoose')

const KeepSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        maxlength: 999
    },
    parg: {
        type: String,
        maxlength: 19999
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('keep', KeepSchema)