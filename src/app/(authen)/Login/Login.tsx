import LineBase from '@/custom/LineBase/LineBase';
import { ChromeOutlined, FacebookOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

const Login: React.FC = () => {
  //   const onFinish = () => {};
  //   const onFinishFailed = () => {};
  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
        <div
          className="w-[300px] p-6 rounded-xl h-auto bg-gray-900
         text-gray-300 flex-col flex items-center justify-center"
        >
          <span className="text-2xl ">ĐĂNG NHẬP</span>
          <LineBase />
          <form action="" className="w-full h-auto mt-2">
            <div className="mb-5 h-auto flex flex-col">
              <span className="text-xl mb-2">Tên đăng nhập</span>
              <Input
                placeholder="Tên hoặc email"
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
            <div>
              <Link href={''} className="!text-sm hover:!text-yellow-500">
                Quên mật khẩu?
              </Link>
            </div>
            <LineBase />
            <div className="flex-col flex pt-4 pb-4 justify-center items-center">
              <Button className="w-full !border-none hover:!text-gray-800 hover:!scale-105">
                Đăng nhập
              </Button>
              <span className="mt-4 ">
                Bạn chưa có tài khoản?{' '}
                <Link href={''} className="hover:!text-yellow-500">
                  Đăng kí
                </Link>
              </span>
            </div>
            <LineBase />
            <div className="flex flex-col items-center justify-center p-3">
              <Button className="w-full mb-3 !border-none hover:!text-gray-800 hover:!scale-105">
                <ChromeOutlined />
                Đăng nhập với GooGle
              </Button>
              <Button className="w-full mb-3 !border-none hover:!text-gray-800 hover:!scale-105">
                <FacebookOutlined />
                Đăng nhập với FaceBook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
