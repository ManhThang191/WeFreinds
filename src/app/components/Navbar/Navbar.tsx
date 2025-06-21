'use client';

import LogoBase from '@/custom/LogoBase/LogoBase';
import {
  HeartOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown';
import Link from 'next/link';
// import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(true);
  const handleOpenSideBar = () => {
    if (isShowSideBar) setIsShowSideBar(false);
    else if (!isShowSideBar) setIsShowSideBar(true);
  };

  return (
    <>
      <nav className="p-5 text-2xl bg-black text-white w-full shadow-xl  fixed z-40">
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
          <li className="flex items-center ">
            <div className="mr-3 hover:text-amber-400 ">
              <Dropdown
                className="!mr-4"
                trigger={['click']}
                overlay={
                  <div className="w-90 bg-white !text-black rounded-lg shadow-lg overflow-hidden">
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
                      Content Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Numquam neque fugiat
                    </Link>
                    <Link
                      href={'/'}
                      className="block !text-black  px-4 py-2 hover:bg-gray-200"
                    >
                      Content Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Numquam neque fugiat
                    </Link>
                    <Link
                      href={'/'}
                      className="block !text-black  px-4 py-2 hover:bg-gray-200"
                    >
                      Content Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Numquam neque fugiat
                    </Link>
                  </div>
                }
                placement="bottomRight"
                arrow
              >
                {/* <div className="text-lg flex items-center hover:text-amber-400">
                </div> */}
                <HeartOutlined className="" />
              </Dropdown>
            </div>
            <div className="mr-3">
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
                arrow
              >
                <div className="text-lg flex items-center hover:text-amber-400">
                  <UserOutlined className=" text-2xl hover:!scale-110" />
                </div>
              </Dropdown>
            </div>
          </li>
        </ul>
      </nav>
      <div className="">
        <Sidebar isShowSidebar={isShowSideBar} />
      </div>
    </>
  );
};

export default Navbar;
