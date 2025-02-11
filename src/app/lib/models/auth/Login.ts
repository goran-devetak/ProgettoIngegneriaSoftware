import { Schema, Document } from 'mongoose';
import { z } from "zod";

export interface Login extends Document {
    email: string;
    password: string;
}

export const LoginSchema = new Schema<Login>({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export const LoginSchemaZod = z.object({
    email: z.string().email({ message: "Mail non valida" }).trim(),
    password: z.string().min(1, { message: "" }).trim()
})