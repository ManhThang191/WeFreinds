import { IFriend } from './friends';

export interface IUser {
  IdUser: string;
  NameUser: string;
  email?: string;
  ListFriend: IFriend[];
  Image?: string;
}
