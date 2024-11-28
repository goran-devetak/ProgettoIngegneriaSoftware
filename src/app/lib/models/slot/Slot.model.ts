import mongoose, {Model} from 'mongoose';
import { Slot, SlotSchema } from './Slot';

const SlotModel: Model<Slot> = mongoose.models.Slot || mongoose.model<Slot>("Slot", SlotSchema);
export default SlotModel;