'use client';

import { UndoOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const route = useRouter();
  const [showFormOTP, setShowFormOTP] = useState(false);

  const handleReturn = () => {
    route.back();
  };
  const handleAuthenEmail = () => {};

  const handleOpenFormOTP = () => {
    setShowFormOTP(!showFormOTP);
  };

  const handleResenOTP = () => {
    message.success('Gửi lại OTP');
    console.log('OTP');
  };
  const handleValidOTP = () => {
    ///do sthing
    try {
      //
    } catch (error) {
      message.error('Xác thực thất bại');
      console.log('error valid otp:', error);
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
        {!showFormOTP && (
          <div
            className="w-[300px] p-6 rounded-xl h-auto bg-gray-900
         text-gray-300 flex-col flex items-center justify-center"
          >
            <div className="flex justify-center items-center flex-col w-full">
              <span className="text-2xl mb-4">Xác thực email</span>
              <Input
                type="email"
                placeholder="Điền email của bạn"
                className="border-none"
              ></Input>
            </div>
            <div className="flex w-full justify-around mt-4 mb-2 m-3">
              <Button
                className=" mb-3 !border-none hover:!text-gray-800 hover:!scale-105"
                onClick={() => {
                  handleReturn();
                }}
              >
                Quay lại
              </Button>
              <Button
                className=" mb-3 !border-none hover:!text-gray-800 hover:!scale-105"
                onClick={() => {
                  handleAuthenEmail();
                  handleOpenFormOTP();
                }}
              >
                Gửi OTP
              </Button>
            </div>
          </div>
        )}

        {showFormOTP && (
          <div
            className="w-[350px] p-6 rounded-xl h-auto bg-gray-900
         text-gray-300 flex-col flex items-center justify-center"
          >
            <div className="flex flex-col w-full items-center">
              <span className=" text-2xl mb-4">Nhập mã OTP</span>
              <Input.OTP className=""></Input.OTP>
              <span
                className="mt-4 cursor-pointer"
                onClick={() => {
                  handleResenOTP();
                }}
              >
                <UndoOutlined className="!mr-2" />
                Gửi lại OTP
              </span>
            </div>

            <div className="flex w-full justify-around mt-3">
              <Button
                className="!border-none hover:!text-gray-800 hover:!scale-105"
                onClick={() => {
                  handleOpenFormOTP();
                }}
              >
                Quay lại
              </Button>
              <Button
                className="!border-none hover:!text-gray-800 hover:!scale-105"
                onClick={() => {
                  handleValidOTP();
                }}
              >
                Xác thực
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ForgotPasswordPage;
