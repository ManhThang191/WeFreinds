export interface IFriend {
  IdFriend: string;
  NameFriend: string;
  DateOfBirth: Date;
  Closefriend: boolean;
  NickName?: string;
  Favorite: IFavorite[];
  Image?: IImageOfFriend[];
  Allergy: string[]; // dị ứng
}

export interface IFavorite {
  IdFavorite: string;
  NameFavorite: string;
}

export interface IImageOfFriend {
  IdImage: string;
  Url: string;
  Description: string;
}
