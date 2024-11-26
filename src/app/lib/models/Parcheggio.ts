import mongoose, { Schema, Document, Types } from "mongoose";

// Interface for the Indirizzo schema
interface IIndirizzo {
    via: string;
    numero: number;
    comune: string;
    cap: number;
    longitudine: number;
    latitudine: number;
}

// Schema for Indirizzo
const IndirizzoSchema: Schema = new mongoose.Schema({
    via: { type: String, required: true },
    numero: { type: Number, required: true },
    comune: { type: String, required: true },
    cap: { type: Number, required: true },
    longitudine: { type: Number, required: false },
    latitudine: { type: Number, required: false }
});

// Interface for the Parcheggio document
interface IParcheggio extends Document {
    nome: string;
    Indirizzo: IIndirizzo;
    numPosti: number;
    status: "operativo" | "inattivo" | "segnalato";
    posti: Types.ObjectId[];
    idSegnalazioni: Types.ObjectId[];
}

// Schema for Parcheggio
const ParcheggioSchema: Schema = new mongoose.Schema({
    nome: { type: String, required: true },
    Indirizzo: { type: IndirizzoSchema, required: true },
    numPosti: { type: Number, required: true },
    status: {
        type: String,
        enum: ["operativo", "inattivo", "segnalato"],
        required: true
    },
    posti: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posto',
        required: false
    }],
    idSegnalazioni: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Segnalazione',
        required: false
    }]
});

// Create and export the model
const Parcheggio = mongoose.models.Parcheggio || mongoose.model<IParcheggio>("Parcheggio", ParcheggioSchema);
export default Parcheggio;
