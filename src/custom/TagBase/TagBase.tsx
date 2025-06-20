import { ETypeTag } from '@/enums/enums';
import React from 'react';

interface TagProps {
  title: string;
  type: string;
}
const TagBase = ({ title, type }: TagProps) => {
  return (
    <>
      ({type} === {ETypeTag.Allergy} ? (
      <div className="rounded-2xl p-2 items-center bg-red-400">
        <span className="">{title}</span>
      </div>
      ) : ( ({type} === {ETypeTag.Favorite} ? (
      <div className="rounded-2xl p-2 items-center bg-green-300">
        <span className="">{title}</span>
      </div>
      )) : (
      <div>
        <span>Không</span>
      </div>
      ) ))
    </>
  );
};

export default TagBase;
