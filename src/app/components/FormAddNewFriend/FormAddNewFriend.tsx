'use client';

import {
  CloseOutlined,
  DeleteOutlined,
  HeartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  notification,
  Radio,
  Upload,
} from 'antd';
import { RcFile } from 'antd/es/upload';
import React, { useState } from 'react';

const { Dragger } = Upload;
interface FormAddNewFriendProps {
  // nameNewFriend: string;
  isOpenFormAddNewFriend: boolean;
  handleOpen: () => void;
}

interface FriendFormValues {
  nameFriend: string;
  nickName?: string;
  dateOfBirth: string;
  gender: string;
  avatarURL?: string;
}
const FormAddNewFriend: React.FC<FormAddNewFriendProps> = ({
  isOpenFormAddNewFriend,
  handleOpen,
}) => {
  const [form] = Form.useForm<FriendFormValues>();
  const [fileList, setFileList] = useState<File[]>([]); // Lưu trữ danh sách file tải lên
  const [imageUrl, setImageUrl] = useState(null); // Lưu trữ URL của ảnh tải lên

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChangeUpLoadFile = (info: any) => {
    console.log('info', info);
    const newFileList = [...info.fileList].slice(-1); // chỉ giữ ảnh cuối cùng
    setFileList(newFileList);

    if (info.file.status === 'done') {
      setImageUrl(
        info.file.response?.url || URL.createObjectURL(info.file.originFileObj)
      );
      message.success('Tải ảnh thành công!');
      message.error('lỗi');
      alert('Tải ảnh thành công!');
    } else if (info.file.status === 'updating') {
      alert('Đang tải ảnh!');
    } else if (info.file.status === 'error') {
      message.error('Tải ảnh thất bại!');
      alert('Tải ảnh thất bại!');
    }
  };

  // Chỉ cho phép file ảnh
  const beforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Chỉ cho phép tải lên ảnh!');
    }
    return isImage || Upload.LIST_IGNORE;
  };

  // Xóa ảnh
  const handleRemoveImage = () => {
    setFileList([]);
    setImageUrl(null);
    form.setFieldValue('avatarURL', undefined);
    message.info('Ảnh đã được xóa');
    return true;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };
  const onFinish = () => {};
  const check = () => {
    notification.open({
      message: 'Thông báo',
      description: 'Đây là một thông báo!',
    });
    try {
      message.success('check');
    } catch (error) {
      console.log('error:', error);
    }
  };
  return (
    <>
      {isOpenFormAddNewFriend && (
        <>
          {/* background */}
          <div className="w-full h-full bg-black fixed inset-0 opacity-80"></div>
          {/* From */}
          <div className="fixed inset-0 p-10 flex mt-15 items-center justify-center ">
            <div className=" p-6 rounded-lg shadow-lg w-170 bg-gray-800 text-gray-300">
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
              <Form
                form={form}
                onFinish={onFinish}
                initialValues={{
                  gender: 'male',
                }}
              >
                <div className="h-[440px]">
                  <div className=" grid grid-cols-2 gap-4">
                    <div className=" flex flex-col gap-3">
                      <Form.Item
                        label={
                          <span className="text-xl text-gray-300">Tên</span>
                        }
                        name="nameFriend"
                        className="mb-2 "
                        rules={[
                          { required: true, message: 'Vui lòng nhập tên!' },
                          { max: 30, message: 'Tên tối đa 30 ký tự!' },
                        ]}
                      >
                        <Input
                          className="!border-none"
                          placeholder="Nhập họ và tên"
                          maxLength={30}
                          showCount
                        />
                      </Form.Item>
                      <Form.Item
                        label={
                          <span className=" text-xl text-gray-300">
                            Biệt danh
                          </span>
                        }
                        name="nickName"
                        className=""
                        rules={[
                          { max: 30, message: 'Biệt danh tối đa 30 ký tự!' },
                        ]}
                      >
                        <Input
                          className="!border-none"
                          placeholder="Nhập biệt danh"
                          maxLength={30}
                          showCount
                        />
                      </Form.Item>
                    </div>
                    <div className="flex flex-col gap-3 justify-center">
                      <Form.Item
                        label={
                          <span className=" text-xl text-gray-300">
                            Sinh nhật
                          </span>
                        }
                        name="dateOfBirth"
                        className=""
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng chọn ngày sinh!',
                          },
                        ]}
                      >
                        <DatePicker
                          className="!mr-5 !border-none !w-full"
                          format="DD/MM/YYYY"
                        />
                      </Form.Item>
                      <Form.Item
                        label={
                          <span className=" text-xl text-gray-300">
                            Giới tính
                          </span>
                        }
                        name="gender"
                        className="flex "
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng chọn giới tính!',
                          },
                        ]}
                      >
                        <Radio.Group
                          options={[
                            {
                              value: 'male',
                              label: (
                                <span className="text-gray-300 text-xl">
                                  Nam
                                </span>
                              ),
                            },
                            {
                              value: 'female',
                              label: (
                                <span className="text-gray-300 text-xl">
                                  Nữ
                                </span>
                              ),
                            },
                          ]}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div
                    className=" rounded-2xl min-h-[200px] flex p-4
                    items-center justify-center mb-5 border-gray-300 border-1 relative"
                  >
                    <Dragger
                      className=" 
                                    rounded-md
                                  "
                      name="file"
                      accept="image/*" // Chỉ cho phép tải ảnh
                      showUploadList={false} // Không hiển thị danh sách file đã tải lên
                      beforeUpload={beforeUpload} // Kiểm tra loại file trước khi tải lên
                      onChange={handleOnChangeUpLoadFile} // Xử lý khi file thay đổi (upload thành công hoặc thất bại)
                      fileList={fileList} // Cập nhật fileList (chỉ giữ một file)
                    >
                      {imageUrl && imageUrl ? (
                        <>
                          <div className=" flex justify-center w-60 h-60">
                            <img
                              src={imageUrl}
                              alt="Uploaded Preview"
                              className="object-cover rounded-md"
                            />
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <PlusOutlined className="text-4xl !text-gray-300 mb-2" />
                          <p className="text-sm text-gray-300">
                            Tải hoặc kéo thả ảnh{' '}
                          </p>
                        </div>
                      )}
                    </Dragger>
                    {imageUrl && (
                      <div className="absolute right-5 bottom-5 ">
                        <Button
                          onClick={handleRemoveImage}
                          className="!bg-gray-700  !text-gray-300 !border-none hover:!bg-gray-900 !p-4"
                        >
                          <DeleteOutlined className="!text-red-500 text-xl" />
                          <p className="text-sm m-auto pt-3">Xóa ảnh</p>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" flex  justify-end  w-full h-auto ">
                  <Button
                    onClick={handleOpen}
                    className="!border-none !p-5 !text-xl mr-5 !bg-red-400 !text-white hover:!bg-red-700 "
                  >
                    Hủy
                  </Button>
                  <Button
                    // onClick={}
                    className="!border-none !p-5 !text-xl mr-5 !bg-yellow-700 !text-white hover:!bg-red-700 "
                    htmlType="reset"
                  >
                    Xóa dữ liệu
                  </Button>

                  <Button
                    className="!border-none !text-xl !p-5 !bg-green-400 !text-white hover:!bg-green-700"
                    htmlType="submit"
                  >
                    Thêm
                    <HeartOutlined />
                  </Button>
                  <Button
                    onClick={() => {
                      check();
                    }}
                  >
                    check
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormAddNewFriend;
