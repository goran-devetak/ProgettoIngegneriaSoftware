const mongoose = require("mongoose")

const segnalazioneSchema = new mongoose.Schema({
    stato: Boolean,
    descrizione: String,
    foto: {
        type: String, // url
        required: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    contatti:{
        mail: String,
        telefono: Number
    }
})

module.exports = mongoose.model("Segnalazione", segnalazioneSchema)