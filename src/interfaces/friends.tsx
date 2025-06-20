export interface IFriends {
  idFriend: string;
  nameFriend: string;
  dateOfBirth: Date;
  closefriend: boolean;
  nickName?: string;
  favorite: IFavorite[];
  image?: IImageOfFriend[];
  allergy?: string[]; // dị ứng
}

export interface IFavorite {
  idFavorite: string;
  nameFavorite: string;
}

export interface IImageOfFriend {
  idImage: string;
  url: string;
  description: string;
}
