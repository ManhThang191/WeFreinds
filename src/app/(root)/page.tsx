import React from 'react';
// import HomePage from './HomePage/HomePage';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/Login');
  return (
    <>
      {/* <div className="w-full ">
      </div> */}
      {/* <HomePage /> */}
    </>
  );
}
