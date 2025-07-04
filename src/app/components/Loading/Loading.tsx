import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
interface LoadingProps {
  isLoading: boolean;
}
const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <>
      {isLoading && (
        <>
          <div className="w-full h-full bg-black fixed inset-0 opacity-80"></div>
          <div className="flex w-full justify-center items-center gap-2 fixed inset-0 text-2xl">
            <LoadingOutlined />
            Đang tải
          </div>
        </>
      )}
    </>
  );
};

export default Loading;
