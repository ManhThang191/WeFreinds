import React from 'react';
import FriendPage from './FriendPage';
import CardFriendInfor from '@/app/components/CardFriendInfor/CardFriendInfor';

const page = () => {
  return (
    <>
      <div className=" w-full h-auto bg-amber-300">
        <FriendPage />
        <CardFriendInfor />
      </div>
    </>
  );
};

export default page;
