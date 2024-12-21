import { Schema, Document } from 'mongoose';
import { z } from "zod";

export interface SignUpData extends Document {
    username: string;
    password: string;
}

export const SignUpDataSchema = new Schema<SignUpData>({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export const SignUpDataSchemaZod = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
