import { Schema, Document } from 'mongoose';
import { Address, AddressSchema } from '../address/Address';
import { Slot, SlotSchema } from '../slot/Slot';
export interface Station extends Document {
  name: string;
  address: Address;
  numSlots: number;
  isActive: boolean;
  isEliminated: boolean;
  reported: boolean;
  slotList: Slot[];
  reportCount: number
}

export const StationSchema = new Schema<Station>({
  name: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  numSlots: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
  isEliminated: { type: Boolean, required: true },
  reported: { type: Boolean, required: true },
  slotList: { type: [SlotSchema], default: [] },
  reportCount: { type: Number, required: true }
});

