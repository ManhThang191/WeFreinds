import { ERoleUser } from '@/enums/enums';
import { IFriends } from './friends';

export interface IUser {
  roleUser: ERoleUser;
  idUser: string;
  isActive: boolean;
  nameUser: string;
  email?: string;
  listFriend: IFriends[];
  image?: string;
}
