const mongoose = require("mongoose")


const indirizzoSchema = new mongoose.Schema({
    via: String,
    numero: Number,
    comune: String,
    cap: String,
    longitudine: Number,
    latitudine: Number
})

const parcheggioSchema = new mongoose.Schema({
    nome: String,
    Indirizzo: indirizzoSchema,
    numPosti: Number,
    status: {
        type: String,
        enum: ["operativo", "inattivo", "segnalato"],
        required: true
    },
    posti:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posto'
    }],
    idSegnalazioni:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Segnalazione'
    }]

})

module.exports = mongoose.model("Parhceggio", parcheggioSchema)