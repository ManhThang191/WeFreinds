import Link from 'next/link';
import React from 'react';

interface LinkBaseProps {
  href: string;
  label: string;
  icon: React.ElementType;
}
const LinkBase = ({ label, href, icon: Icon }: LinkBaseProps) => {
  return (
    <Link
      href={href}
      className="flex p-2 items-center rounded-xl hover:!bg-gray-800 hover:!text-gray-300 transition-all duration-300"
    >
      <div className="text-2xl ml-2 mr-5 ">
        <Icon />
      </div>
      <span>{label}</span>
    </Link>
  );
};

export default LinkBase;
