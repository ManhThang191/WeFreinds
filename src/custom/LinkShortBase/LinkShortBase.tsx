import Link from 'next/link';
import React from 'react';

interface LinkShortBaseProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

const LinkShortBase = ({ label, href, icon: Icon }: LinkShortBaseProps) => {
  return (
    <Link
      href={href}
      className="flex mb-3 flex-col p-2 items-center rounded-xl hover:!bg-gray-800 hover:!text-gray-300 transition-all duration-300"
    >
      <div className="text-2xl m-auto">
        <Icon />
      </div>
      <span className="text-xs">{label}</span>
    </Link>
  );
};

export default LinkShortBase;
