import { Schema, Document } from 'mongoose';

export interface User extends Document {
    _id: number;
    name: string;
    surname:string;
    username: string;
    password: string;
    stillExisting: boolean;
}

export const UserSchema = new Schema<User>({
    _id: { type: Number, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    stillExisting: { type: Boolean, required: true, default: true }
});
