import FooterBase from '@/custom/FooterBase/FooterBase';
import LineBase from '@/custom/LineBase/LineBase';
import LinkBase from '@/custom/LinkBase/LinkBase';
import LinkShortBase from '@/custom/LinkShortBase/LinkShortBase';
import {
  HomeOutlined,
  SettingOutlined,
  ShareAltOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';

interface SidebarProps {
  isShowSidebar: boolean;
}

const Sidebar = ({ isShowSidebar }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed z-30 top-0 left-0 h-screen bg-black pt-20 scroll-auto text-white w-70 transform overflow-y-auto ${
          !isShowSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-100 ease-in-out z-30`}
      >
        <div className="p-4 ">
          <ul className="">
            <li className="">
              <LinkBase
                label={'Trang chủ'}
                href={'/HomePage'}
                icon={HomeOutlined}
              />
            </li>
            <li className="">
              <LinkBase
                label={'Bạn bè'}
                href={`./FriendPage`}
                icon={ShareAltOutlined}
              />
            </li>
            <li className="">
              <LinkBase
                label={'Sự kiện'}
                href={'/EventPage'}
                icon={StarOutlined}
              />
            </li>
            <li className="">
              <LinkBase label={'Cài đặt'} href={'/'} icon={SettingOutlined} />
            </li>
            <LineBase />
            <li className="p-4 item">
              <FooterBase />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed z-20 top-0 left-[-120] h-screen bg-black pt-20 scroll-auto text-white w-30 transform overflow-y-auto ${
          isShowSidebar ? 'translate-x-full' : '-translate-x-0'
        } transition-transform duration-100 ease-in-out z-20`}
      >
        <div className="p-4 ">
          <ul className="">
            <li className="">
              <LinkShortBase
                label={'Trang chủ'}
                href={'/HomePage'}
                icon={HomeOutlined}
              />
            </li>
            <li className="">
              <LinkShortBase
                label={'Bạn bè'}
                href={`./FriendPage`}
                icon={ShareAltOutlined}
              />
            </li>
            <li className="">
              <LinkShortBase
                label={'Sự kiện'}
                href={'/EventPage'}
                icon={StarOutlined}
              />
            </li>
            <li className="">
              <LinkShortBase label={'Bạn'} href={'/'} icon={UserOutlined} />
            </li>
            <li className="">
              <LinkShortBase
                label={'Cài đặt'}
                href={'/'}
                icon={SettingOutlined}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
