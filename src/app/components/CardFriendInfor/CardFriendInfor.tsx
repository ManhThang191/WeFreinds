'use client';

import {
  DeleteOutlined,
  EditOutlined,
  GiftOutlined,
  MoreOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import FormAddNewFriend from '../FormAddNewFriend/FormAddNewFriend';
import { fetchFriends } from '@/api/fetchFriendAPI';
import Loading from '../Loading/Loading';

// interface FriendsProps {
//   idFriend: string;
//   nameFriend: string;
//   dateOfBirth: Date;
//   closefriend: boolean;
//   nickName?: string;
//   allergy?: string[];
// }
type Friend = {
  _id: string;
  idFriend: string;
  nameFriend: string;
  dateOfBirth: string;
  closefriend: boolean;
  nickName: string;
  avatarURL: string;
  allergy: string;
};
const CardFriendInfor = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [isShowFormAddNewFriend, setIsShowFormAddNewFriend] = useState(false);

  useEffect(() => {
    fetchFriends()
      .then((data) => {
        setFriends(data);
        fetchFriends();
        setLoading(false);
      })
      .catch(() => setLoading(true));
  }, []);

  const handleOpenFormAddNewFriend = () => {
    if (isShowFormAddNewFriend) setIsShowFormAddNewFriend(false);
    else if (!isShowFormAddNewFriend) setIsShowFormAddNewFriend(true);
  };

  return (
    <>
      <Loading isLoading={loading} />
      {/* <div className="grid grid-cols-4 gap-4 bg-gray-600 h-full"> */}
      <div
        onClick={handleOpenFormAddNewFriend}
        className="bg-gray-800 text-gray-300 w-full min-w-[250px] p-3 rounded-xl 
               hover:scale-102 transition-transform duration-300 ease-in-out 
              cursor-pointer flex items-center justify-center
              "
      >
        <div className=" ">
          <PlusOutlined className="!text-2xl mr-3 !text-gray-300" />
          <span className="text-2xl text-gray-300">Thêm bạn bè</span>
        </div>
      </div>
      <FormAddNewFriend
        isOpenFormAddNewFriend={isShowFormAddNewFriend}
        handleOpen={handleOpenFormAddNewFriend}
      />
      {friends &&
        friends.length > 0 &&
        friends.map((friend) => (
          <div
            key={friend._id}
            className="bg-gray-800 text-gray-300 w-ful min-w-[250px] p-3 rounded-xl 
               hover:scale-102 transition-transform duration-300 ease-in-out 
              cursor-pointer
              "
          >
            <Link href={`/`} className="w-full">
              <div className="w-full h-[350px]">
                <img
                  src={friend.avatarURL}
                  alt="Avatar"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <br />
              <div className="flex text-2xl ">
                <div className="flex-9">{friend.nameFriend}</div>
                <div
                  className="flex-1 rounded-full hover:bg-gray-700"
                  onClick={(e) => {
                    e.stopPropagation(); // Ngăn sự kiện lan lên Link
                    e.preventDefault(); // Ngăn điều hướng Link
                  }}
                >
                  <Dropdown
                    trigger={['click']}
                    overlay={
                      <div className="w-60 bg-white !text-black rounded-lg shadow-lg overflow-hidden">
                        <div
                          // href={'/'}
                          className="block !text-black  px-4 py-2 hover:bg-gray-200"
                        >
                          {/* <UserOutlined className="mr-2 " /> */}
                          <EditOutlined className="mr-2 " />
                          Chỉnh sửa
                        </div>
                        <div
                          // href={'/'}
                          className="block !text-black  px-4 py-2 hover:bg-gray-200"
                        >
                          {/* <UserOutlined className="mr-2 " /> */}
                          <DeleteOutlined className="mr-2 " />
                          Xóa
                        </div>
                      </div>
                    }
                    placement="bottomRight"
                    arrow
                  >
                    <MoreOutlined className="!p-0.5" />
                  </Dropdown>
                </div>
              </div>

              <span className="text-sm ">
                {friend.dateOfBirth}
                <GiftOutlined className="ml-2" />
              </span>
            </Link>
          </div>
        ))}
      {/* </div> */}
    </>
  );
};

export default CardFriendInfor;
