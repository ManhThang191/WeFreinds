import CardFriendInfor from '@/app/components/CardFriendInfor/CardFriendInfor';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="  text-white p-4 grid grid-cols-4 gap-6 ">
        <CardFriendInfor />
      </div>
    </>
  );
};

export default HomePage;
