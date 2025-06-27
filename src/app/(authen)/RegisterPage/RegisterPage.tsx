import LineBase from '@/custom/LineBase/LineBase';
import { Button, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
        <div
          className="w-[300px] p-6 rounded-xl h-auto bg-gray-900
         text-gray-300 flex-col flex items-center justify-center"
        >
          <span className="text-2xl ">ĐĂNG KÍ</span>
          <LineBase />
          <form action="POST" className="w-full h-auto mt-2">
            <div className="mb-5 h-auto flex flex-col">
              <span className="text-xl mb-2">Tên đăng nhập</span>
              <Input
                placeholder="Tên đăng nhập"
                autoFocus
                type="text"
                // className=" !border-none"
              />
            </div>
            <div className="mb-5 h-auto flex flex-col">
              <span className="text-xl mb-2">Email</span>
              <Input
                type="email"
                placeholder="Email"
                autoFocus
                className=" !border-none"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <span className="text-xl mb-2">Mật khẩu</span>
              <Input
                type="password"
                placeholder="Mật khẩu"
                className=" !border-none"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <span className="text-xl mb-2">Nhập lại mật khẩu</span>
              <Input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className=" !border-none"
              />
            </div>

            <LineBase />
            <div className="flex-col flex pt-4 pb-4 justify-center items-center">
              <Button className="w-full !border-none hover:!text-gray-800 hover:!scale-105">
                Đăng kí
              </Button>
            </div>
            <div className="flex justify-center w-full">
              <span>
                Đã có tài khoản?
                <Link
                  href={'/Login'}
                  className="!text-sm ml-2 hover:!text-yellow-500"
                >
                  Đăng nhập
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
