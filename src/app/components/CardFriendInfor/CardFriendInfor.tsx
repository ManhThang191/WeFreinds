'use client';

import { FriendsList } from '@/FakeData/FriendsFakeData';
import {
  DeleteOutlined,
  EditOutlined,
  GiftOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';
import Link from 'next/link';

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
      <div className="grid grid-cols-4 gap-4 ">
        {FriendsList &&
          FriendsList.length > 0 &&
          FriendsList.map((friend) => (
            <div
              key={friend.idFriend}
              className="bg-amber-700 inline-block  p-3 rounded-xl 
              m-4 hover:scale-102 transition-transform duration-300 ease-in-out 
              cursor-pointer
              "
            >
              <Link href={`/`} className="w-full">
                <div className="w-full h-[350px]">
                  <img
                    src={friend.avatar}
                    alt="Avatar"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <br />
                <div className="flex text-2xl ">
                  <div className="flex-9">{friend.nameFriend}</div>
                  <div
                    className="flex-1 rounded-full hover:bg-gray-400"
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
                      <MoreOutlined />
                    </Dropdown>
                  </div>
                </div>

                <span className="text-sm ">
                  {friend.dateOfBirth.toDateString()}
                  <GiftOutlined className="ml-2" />
                </span>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardFriendInfor;
