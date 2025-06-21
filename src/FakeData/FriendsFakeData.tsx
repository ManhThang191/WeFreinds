import { IFriends } from '@/interfaces/friends';
import {
  urlAvatarPThao,
  urlAvatarTho,
  urlAvatarVThao,
} from '@/url/urlSocialMedia';

export const FriendsList: IFriends[] = [
  {
    idFriend: 'f1',
    nameFriend: 'Vân Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarVThao,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Mì cay',
      },
    ],
  },
  {
    idFriend: 'f2',
    nameFriend: 'Phương Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarPThao,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Bún cá',
      },
    ],
    allergy: 'Cá',
  },
  {
    idFriend: 'f3',
    nameFriend: 'Thọ ',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarTho,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Phở',
      },
    ],
  },
  {
    idFriend: 'f4',
    nameFriend: 'Vân Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarVThao,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Mì cay',
      },
    ],
  },
  {
    idFriend: 'f5',
    nameFriend: 'Phương Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarPThao,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Bún cá',
      },
    ],
    allergy: 'Cá',
  },
  {
    idFriend: 'f6',
    nameFriend: 'Thọ ',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarTho,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Phở',
      },
    ],
  },
  {
    idFriend: 'f7',
    nameFriend: 'Vân Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarVThao,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Mì cay',
      },
    ],
  },
  {
    idFriend: 'f8',
    nameFriend: 'Phương Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarPThao,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Bún cá',
      },
    ],
    allergy: 'Cá',
  },
  {
    idFriend: 'f9',
    nameFriend: 'Thọ ',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    avatar: urlAvatarTho,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Phở',
      },
    ],
  },
];
