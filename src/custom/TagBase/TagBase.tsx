import { ETypeTag } from '@/enums/enums';
import React from 'react';

interface TagProps {
  title: string;
  type: string;
}
const TagBase = ({ title, type }: TagProps) => {
  return (
    <>
      {type === ETypeTag.Allergy ? (
        <div className="rounded-2xl inline-block m-2 p-2 items-center bg-red-400">
          <span>{title}</span>
        </div>
      ) : type === ETypeTag.Favorite ? (
        <div className="rounded-2xl p-2 items-center m-2 inline-block bg-green-300">
          <span>{title}</span>
        </div>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default TagBase;
