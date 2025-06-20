import { gmail, urlFaceBook, urlGit } from '@/url/urlSocialMedia';
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

const FooterBase = () => {
  return (
    <>
      <div className=" bg-black text-gray-400 flex flex-col text-base w-full mt-3">
        <span>
          <span className="mb-2">
            Đây là trang web được xây dựng bởi cá nhân, mọi ý kiến đóng góp xin
            gửi về địa chỉ : <br />
          </span>
          <span>
            <Link href={urlFaceBook} target="_blank" rel="noopener noreferrer">
              {' '}
              <FacebookOutlined className="ml-2 mr-3" />
              Thắng Nguyễn
            </Link>{' '}
            <br />
            <Link href={urlGit} target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="ml-2 mr-3" />
              Manh Thang
            </Link>
            <br />
            <span className="mb-2">
              {/* <GoogleOutlined /> thang2003191@gmai.com <br /> */}
              <GoogleOutlined className="ml-2 mr-3" />
              {gmail}
            </span>
            <br />
            <span>
              Cảm ơn bạn đã sử dụng trang web <HeartOutlined></HeartOutlined>!
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default FooterBase;
