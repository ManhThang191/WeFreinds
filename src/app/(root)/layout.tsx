import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
