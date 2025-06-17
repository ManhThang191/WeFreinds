'use client';
import LineBase from '@/custom/LineBase/LineBase';
import LinkBase from '@/custom/LinkBase/LinkBase';
import LogoBase from '@/custom/LogoBase/LogoBase';
import {
  HeartOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown';
import Link from 'next/link';
// import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const handleOpenSideBar = () => {
    return setIsShowSideBar(true);
  };
  const handleCloseSideBar = () => {
    return setIsShowSideBar(false);
  };

  return (
    <>
      <nav className="p-5 text-2xl bg-black text-white w-full shadow-xl ">
        <ul className="list-none flex flex-wrap justify-between items-center">
          <li>
            <Button
              className="!bg-black !border-none"
              onClick={() => {
                handleOpenSideBar();
              }}
            >
              <MenuOutlined className="!text-white text-lg hover:!scale-110" />
            </Button>
            <LogoBase />
          </li>

          <li className="w-150">
            <Input
              className="w-full md:w-90 !rounded-full"
              suffix={<SearchOutlined />}
              placeholder="Tìm bạn bè của bạn ?"
            />
          </li>

          {/* thông báo */}
          <li className="flex">
            <Dropdown
              trigger={['click']}
              overlay={
                <div className="w-90  bg-white !text-black rounded-lg shadow-lg overflow-hidden">
                  <div className="text-2xl p-4">
                    <HeartOutlined className="mr-2" />
                    Thông báo
                  </div>
                  <div>
                    <Button>Tất cả</Button>
                    <Button>Chưa đọc</Button>
                  </div>
                  <Link
                    href={'/'}
                    className="block !text-black  px-4 py-2 hover:bg-gray-200"
                  >
                    Content Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Numquam neque fugiat
                  </Link>
                  <Link
                    href={'/'}
                    className="block !text-black  px-4 py-2 hover:bg-gray-200"
                  >
                    Content Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Numquam neque fugiat
                  </Link>
                  <Link
                    href={'/'}
                    className="block !text-black  px-4 py-2 hover:bg-gray-200"
                  >
                    Content Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Numquam neque fugiat
                  </Link>
                </div>
              }
              placement="bottomRight"
              // arrow
            >
              <div className="text-lg  flex items-center hover:text-amber-400">
                <HeartOutlined className=" text-2xl hover:!scale-110 mr-5" />
              </div>
            </Dropdown>

            {/* Menu user */}

            <Dropdown
              trigger={['click']}
              overlay={
                <div className="w-60 bg-white !text-black rounded-lg shadow-lg overflow-hidden">
                  <Link
                    href={'/'}
                    className="block !text-black  px-4 py-2 hover:bg-gray-200"
                  >
                    <UserOutlined className="mr-2 " />
                    Nguyễn Mạnh Thắng
                  </Link>

                  <Link
                    href={'/'}
                    className="block px-4 !text-red-500 py-2 hover:!bg-red-500 hover:!text-white"
                    // onClick={() => localStorage.removeItem('userLogin')}
                  >
                    <LogoutOutlined className="mr-2" />
                    Đăng Xuất
                  </Link>
                </div>
              }
              placement="bottomRight"
              // arrow
            >
              <div className="text-lg flex items-center hover:text-amber-400">
                <UserOutlined className="mr-2 text-2xl hover:!scale-110" />
              </div>
            </Dropdown>
          </li>
        </ul>
      </nav>

      {/* Side bar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white w-70 transform ${
          isShowSideBar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 pt-6">
          <div className="text-2xl">
            <Button
              className="!bg-black !border-none "
              onClick={() => {
                handleCloseSideBar();
              }}
            >
              <MenuOutlined className="!text-white !text-lg hover:!scale-110 mr-3" />
            </Button>
            <LogoBase />
          </div>

          <ul className="mt-5">
            <li className="">
              <LinkBase label={'Trang chủ'} href={'/'} icon={HomeOutlined} />
            </li>
            <li className="">
              <LinkBase
                label={'Danh sách bạn bè'}
                href={`./ListFriendPage`}
                icon={ShareAltOutlined}
              />
            </li>
            <li className="">
              <LinkBase label={'Sự kiện'} href={'/'} icon={StarOutlined} />
            </li>
            <li className="">
              <LinkBase label={'Cài đặt'} href={'/'} icon={SettingOutlined} />
            </li>

            <LineBase />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
