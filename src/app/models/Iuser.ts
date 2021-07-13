import { ISession } from './Isession';

export interface IUser {
  id?: number;
  name?: String;
  session?: ISession;
}
