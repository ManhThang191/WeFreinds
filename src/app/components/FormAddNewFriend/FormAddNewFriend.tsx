'use client';

import { CloseOutlined, HeartOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, message, Radio, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

const { Dragger } = Upload;
interface FormAddNewFriendProps {
  // nameNewFriend: string;
  isOpenFormAddNewFriend: boolean;
  handleOpen: () => void;
}
const FormAddNewFriend: React.FC<FormAddNewFriendProps> = ({
  isOpenFormAddNewFriend,
  handleOpen,
}) => {
  const [fileList, setFileList] = useState([]); // Lưu trữ danh sách file tải lên
  const [imageUrl, setImageUrl] = useState(null); // Lưu trữ URL của ảnh tải lên

  // Hàm xử lý khi có thay đổi trong file tải lên
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // Chỉ giữ lại ảnh cuối cùng được tải lên
    newFileList = newFileList.slice(-1);
    setFileList(newFileList);

    // Kiểm tra trạng thái file (upload thành công hay thất bại)
    if (info.file.status === 'done') {
      // Lấy URL của ảnh tải lên thành công
      setImageUrl(
        info.file.response.url || URL.createObjectURL(info.file.originFileObj)
      );
      message.success('Tải ảnh thành công!');
    } else if (info.file.status === 'error') {
      message.error('Tải ảnh thất bại!');
    }
  };

  // Kiểm tra trước khi tải ảnh (chỉ cho phép tải ảnh)
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Chỉ cho phép tải lên ảnh!');
    }
    return isImage;
  };

  return (
    <>
      Popup Modal
      {isOpenFormAddNewFriend && (
        <>
          <div className="w-full h-full bg-black fixed inset-0 opacity-80"></div>
          <div className="fixed inset-0 p-10 flex items-center justify-center ">
            <div className=" p-6 rounded-lg shadow-lg w-250 bg-gray-800 text-gray-300">
              <div className=" w-full flex ">
                <h2 className="text-2xl font-bold m-auto items-center text-center mb-4">
                  Thêm bạn mới !
                </h2>
                <Button
                  className="!items-end !bg-gray-800 !border-none !text-2xl !text-gray-300 !p-2"
                  onClick={handleOpen}
                >
                  <CloseOutlined />
                </Button>
              </div>

              <form action="#" method="POST">
                <div className="h-[420px] grid grid-cols-2 grid-rows-2 gap-6">
                  <div className="">
                    <div className="flex-col items-center mb-4">
                      <div className="mb-4">
                        <span className="">Tên</span>
                        <Input
                          className="!border-none"
                          size="large"
                          placeholder="Nhập họ và tên bạn của bạn"
                          count={{
                            show: true,
                            max: 30,
                          }}
                        />
                      </div>
                      <div>
                        <span className="mr-2">Sinh nhật</span>
                        <DatePicker
                          size="large"
                          className="!mr-5 !border-none"
                        />

                        <Radio.Group
                          // value={}
                          options={[
                            {
                              value: 'male',
                              label: <span className="text-gray-300">Nam</span>,
                            },
                            {
                              value: 'female',
                              label: <span className="text-gray-300">Nữ</span>,
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className=" rounded-2xl flex flex-col 
                    items-center justify-center "
                  >
                    <Dragger
                      className="max-w-80 h-auto overflow-hidden 
                                  border-2 border-gray-400 rounded-md
                                  hover:!border-gray-800"
                      name="file"
                      accept="image/*" // Chỉ cho phép tải ảnh
                      showUploadList={false} // Không hiển thị danh sách file đã tải lên
                      beforeUpload={beforeUpload} // Kiểm tra loại file trước khi tải lên
                      onChange={handleChange} // Xử lý khi file thay đổi (upload thành công hoặc thất bại)
                      fileList={fileList} // Cập nhật fileList (chỉ giữ một file)
                    >
                      {imageUrl && imageUrl ? (
                        <div className=" flex justify-center overscroll-auto w-30 items-center">
                          <img
                            src={imageUrl}
                            alt="Uploaded Preview"
                            className="object-cover  rounded-md"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <PlusOutlined className="text-4xl !text-gray-300 mb-2" />
                          <p className="text-sm text-gray-300">Tải ảnh lên</p>
                        </div>
                      )}
                    </Dragger>
                  </div>
                  <div className="bg-amber-300"></div>
                  <div className="">
                    <span className="text-2xl">Giới thiệu</span>
                    <TextArea
                      rows={6}
                      className="!h-fit"
                      placeholder="Giới thiệu người bạn ở đây!"
                      size="large"
                    />
                  </div>
                </div>

                <div className="mt-5 flex  justify-end  w-full h-auto ">
                  <Button
                    onClick={handleOpen}
                    className="!border-none !p-5 !text-xl mr-5 !bg-red-400 !text-white hover:!bg-red-700 "
                  >
                    Hủy
                  </Button>
                  <Button className="!border-none !text-xl !p-5 !bg-green-400 !text-white hover:!bg-green-700">
                    Thêm
                    <HeartOutlined />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormAddNewFriend;
