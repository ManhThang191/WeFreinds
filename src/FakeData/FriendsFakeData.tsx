import { IFriend } from '@/interfaces/friends';

export const FriendsList: IFriend[] = [
  {
    IdFriend: 'ID-Friend-1',
    NameFriend: 'Alice',
    DateOfBirth: new Date('1990-05-14'),
    Closefriend: true,
    NickName: 'Ally',
    Favorite: [
      { IdFavorite: 'ID-1', NameFavorite: 'Pho' },
      { IdFavorite: 'ID-3', NameFavorite: 'Pizza' },
    ],
    Image: [
      {
        IdImage: 'Image1',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
      {
        IdImage: 'Image2',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
    ],
    Allergy: ['Peanuts', 'Eggs'],
  },
  {
    IdFriend: 'ID-Friend-2',
    NameFriend: 'Bob',
    DateOfBirth: new Date('1985-08-21'),
    Closefriend: false,
    NickName: 'Bobby',
    Favorite: [
      { IdFavorite: 'ID-2', NameFavorite: 'Sushi' },
      { IdFavorite: 'ID-5', NameFavorite: 'Burger' },
    ],
    Image: [
      {
        IdImage: 'Image3',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
      {
        IdImage: 'Image4',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
    ],
    Allergy: ['Shellfish', 'Wheat'],
  },
  {
    IdFriend: 'ID-Friend-3',
    NameFriend: 'Charlie',
    DateOfBirth: new Date('1992-11-30'),
    Closefriend: true,
    Favorite: [
      { IdFavorite: 'ID-4', NameFavorite: 'Banh Mi' },
      { IdFavorite: 'ID-5', NameFavorite: 'Burger' },
    ],
    Image: [
      {
        IdImage: 'Image5',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
      {
        IdImage: 'Image6',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
    ],
    Allergy: ['Milk'],
  },
  {
    IdFriend: 'ID-Friend-4',
    NameFriend: 'David',
    DateOfBirth: new Date('1988-02-10'),
    Closefriend: true,
    NickName: 'Dave',
    Favorite: [
      { IdFavorite: 'ID-1', NameFavorite: 'Pho' },
      { IdFavorite: 'ID-4', NameFavorite: 'Banh Mi' },
    ],
    Image: [
      {
        IdImage: 'Image7',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
      {
        IdImage: 'Image8',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
    ],
    Allergy: ['Peanuts'],
  },
  {
    IdFriend: 'ID-Friend-5',
    NameFriend: 'Eve',
    DateOfBirth: new Date('1995-07-23'),
    Closefriend: false,
    Favorite: [
      { IdFavorite: 'ID-2', NameFavorite: 'Sushi' },
      { IdFavorite: 'ID-3', NameFavorite: 'Pizza' },
    ],
    Image: [
      {
        IdImage: 'Image9',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
      {
        IdImage: 'Image10',
        Url: '/asset/image_avatar_friend.png',
        Description: "Friend's profile image",
      },
    ],
    Allergy: ['Shellfish', 'Milk'],
  },
];
