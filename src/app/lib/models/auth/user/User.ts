import { Schema, Document } from 'mongoose';
import { z } from "zod"

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    stillExisting: boolean;
}

export const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    stillExisting: { type: Boolean, required: true, default: true }
});

export const UserSchemaZod = z.object({
    name: z.string().trim(),
    email: z.string()
        .email({ message: "Mail non valida" })
        .trim(),
    password: z.string()
        .min(8, { message: "La password deve contenere almeno 8 caratteri" })
        .refine((password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password), {
            message: "La password deve contenere almeno una lettera maiuscola, una minuscola, un numero e un simbolo",
        })
        .transform((val) => val.trim()),
    stillExisting: z.boolean()
});
