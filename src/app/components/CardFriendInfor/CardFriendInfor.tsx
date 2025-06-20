import { FriendsList } from '@/FakeData/FriendsFakeData';
import React from 'react';

// interface FriendsProps {
//   idFriend: string;
//   nameFriend: string;
//   dateOfBirth: Date;
//   closefriend: boolean;
//   nickName?: string;
//   allergy?: string[];
// }

const CardFriendInfor = () => {
  return (
    <>
      {FriendsList &&
        FriendsList.map((friend) => {
          <div key={friend.idFriend}>
            <div>Ảnh</div>
            <div>
              <span>
                {friend.nameFriend} - {friend.nickName}
              </span>
              <span>{friend.dateOfBirth.toDateString()}</span>
            </div>
          </div>;
        })}
    </>
  );
};

export default CardFriendInfor;
