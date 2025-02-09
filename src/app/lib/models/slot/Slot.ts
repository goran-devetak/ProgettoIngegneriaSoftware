import { Schema, Document } from 'mongoose';
import { Use, UseSchema } from '../use/Use';

export interface Slot extends Document {
  bloccato: boolean;
  isEliminated: boolean;
  category: 'free' | 'sharing' | 'private';
  uses: Use[];
}

export const SlotSchema = new Schema<Slot>({
  bloccato: { type: Boolean, required: true },
  isEliminated: { type: Boolean, required: true },
  category: { type: String, enum: ['free', 'sharing', 'private'], required: true },
  uses: { type: [UseSchema], default: [] },
});

