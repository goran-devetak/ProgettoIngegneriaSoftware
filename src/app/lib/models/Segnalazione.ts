import mongoose, { Document, Schema } from "mongoose";

export interface ISegnalazione extends Document {
    stato: boolean;
    descrizione: string;
    foto?: string; // Optional string (URL)
    timestamp: Date;
    contatti: {
        mail: string;
        telefono: number;
    };
}

const SegnalazioneSchema:Schema = new mongoose.Schema({
    stato: { type: Boolean, required: true },
    descrizione: { type: String, required: true },
    foto: { type: String, required: false },
    timestamp: { type: Date, default: Date.now }, 
    contatti: {
        mail: { type: String, required: true },
        telefono: { type: Number, required: true }
    }
});

const Segnalazione = mongoose.model<ISegnalazione>('Station', SegnalazioneSchema)

export default Segnalazione;
