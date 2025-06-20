import TagBase from '@/custom/TagBase/TagBase';
import { ETypeTag } from '@/enums/enums';
import { FriendsList } from '@/FakeData/FriendsFakeData';
import { Image } from 'antd';
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
        FriendsList.length > 0 &&
        FriendsList.map((friend) => (
          <div key={friend.idFriend}>
            <div>
              <Image src="image_avatar_friend.pnj" alt="Avatar" />
            </div>
            <div>
              {friend.closefriend ? (
                <span className="text-pink-600">{friend.nameFriend}</span>
              ) : (
                <span>{friend.nameFriend}</span>
              )}
              <span>
                Ngày sinh: {new Date(friend.dateOfBirth).toDateString()}
              </span>
            </div>
            <div>
              <TagBase
                title={friend.favorite ? 'Favorite' : 'Not Favorite'}
                type={ETypeTag.Favorite}
              />
            </div>
            <div>
              <TagBase
                title={friend.allergy || 'No allergy'}
                type={ETypeTag.Allergy}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CardFriendInfor;
