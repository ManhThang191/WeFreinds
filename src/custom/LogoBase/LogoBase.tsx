import Link from 'next/link';
import React from 'react';

const LogoBase = () => {
  return (
    <Link href={`/`} className="">
      <span className="mr-2">Logo</span>
      <span>WeFriends</span>
    </Link>
  );
};

export default LogoBase;
