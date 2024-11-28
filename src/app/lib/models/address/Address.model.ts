import mongoose, {Model} from 'mongoose';
import { Address, AddressSchema } from './Address';

const AddressModel: Model<Address> = mongoose.models.Address || mongoose.model<Address>("Address", AddressSchema);
export default AddressModel;