import { Status } from '../Enums/status.enum';

export interface Task {
  id: Number;
  title: String;
  description: String;
  destinationDepartment: Number;
  destinationEmployee: Number;
  timeToFinish: Date;
  status: Status
}
