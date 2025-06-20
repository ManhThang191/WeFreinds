import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      {/* <Sidebar isShowSidebar={false} /> */}
      {children}
    </>
  );
};

export default layout;
