import mongoose, {Model} from 'mongoose';
import { Report, ReportSchema } from './Report';

const ReportModel: Model<Report> = mongoose.models.Report || mongoose.model<Report>("Report", ReportSchema);
export default ReportModel;