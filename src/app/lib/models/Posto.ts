import mongoose, { Schema, Document } from "mongoose";

// Interface for the Utilizzo schema
interface IUtilizzo {
    IdUtente: number;
    timestamp: Date;
}

// Schema for Utilizzo
const UtilizzoSchema: Schema = new mongoose.Schema({
    IdUtente: { type: Number, required: true }, // Adding `required` to ensure presence of IdUtente
    timestamp: { type: Date, default: Date.now }
});

// Interface for the Posto document
interface IPosto extends Document {
    stato: boolean;
    categoria: "sharing" | "privato" | "libero"; // Enum values defined as union types
    utilizzi: IUtilizzo[];
}

// Schema for Posto
const PostoSchema: Schema = new mongoose.Schema({
    stato: { type: Boolean, required: true },
    categoria: {
        type: String,
        enum: ["sharing", "privato", "libero"],
        required: true
    },
    utilizzi: { type: [UtilizzoSchema], required: false } // Array of Utilizzo documents
});

// Create and export the model
const Posto = mongoose.model<IPosto>("Posto", PostoSchema);
export default Posto;
