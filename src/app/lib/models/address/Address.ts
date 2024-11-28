import { Schema, Document } from 'mongoose';

export interface Address extends Document{
  street: string;
  number: number;
  city: string;
  zipCode: number;
  longitude: number;
  latitude: number;
}

export const AddressSchema = new Schema<Address>({
  street: { type: String, required: true },
  number: { type: Number, required: true },
  city: { type: String, required: true },
  zipCode: { type: Number, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});
