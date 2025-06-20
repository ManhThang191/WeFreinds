import { IFriends } from '@/interfaces/friends';

export const FriendsList: IFriends[] = [
  {
    idFriend: 'f1',
    nameFriend: 'Vân Thảo',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
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
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Bún cá',
      },
    ],
    allergy: ['Cá'],
  },
  {
    idFriend: 'f3',
    nameFriend: 'Thọ ',
    dateOfBirth: new Date(1 - 1 - 2003),
    closefriend: true,
    favorite: [
      {
        idFavorite: 'food1',
        nameFavorite: 'Phở',
      },
    ],
  },
];
