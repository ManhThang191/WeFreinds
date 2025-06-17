import { IFriend } from '@/interfaces/friends';
import React from 'react';

const CardFriendInfor = ({
  NameFriend,
  IdFriend,
  Allergy,
  Closefriend,
  DateOfBirth,
  Favorite,
  Image,
  NickName,
}: IFriend) => {
  return (
    <>
      ({Closefriend} && ({Closefriend} ? (
      <>
        <div key={IdFriend} className="bg-pink-300">
          <div></div>
          <div>
            <span>{NameFriend}</span>
          </div>
          <div></div>
        </div>
      </>
      ) : (
      <>
        <div key={IdFriend}>
          <div></div>
          <div>
            <span>{NameFriend}</span>
          </div>
        </div>
      </>
      ) ))
    </>
  );
};

export default CardFriendInfor;
