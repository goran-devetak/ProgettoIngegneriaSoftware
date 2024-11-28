import mongoose, {Model} from 'mongoose';
import { Use, UseSchema } from './Use';

const UseModel: Model<Use> = mongoose.models.Use || mongoose.model<Use>("Use", UseSchema);
export default UseModel;