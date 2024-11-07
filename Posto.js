const mongoose = require("mongoose")

const utilizzoSchema = new mongoose.Schema({
    IdUtente: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }

})

const postoSchema = new mongoose.Schema({
    stato: Boolean,
    categoria: {
        type: String,
        enum: ["sharing", "privato", "libero"],
        required: true
    },
    utilizzi: [utilizzoSchema]

})

module.exports = mongoose.model("Posto", postoSchema)