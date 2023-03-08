import React, { useEffect, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';

const GridItem = ({
  customer: {
    name: { first, last },
    date,
    method,
    status,
    total,
  },
  order,
}) => {
  const [bgColor, setbgColor] = useState('');

  useEffect(() => {
    const setBg = () => {
      if (status === 'On Hold') {
        setbgColor('bg-yellow-100');
      } else if (status === 'Processing') {
        setbgColor('bg-green-100');
      } else {
        setbgColor('bg-blue-100');
      }
    };
    setBg();
  }, []);

  return (
    <li className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-2 bg-gray-50 rounded-lg cursor-pointer">
      <div className="col-span-1 flex items-center">
        <div className="bg-purple-100 rounded-lg p-3">
          <BsFillPersonFill size={20} className="text-purple-800" />
        </div>
        {order ? (
          <div className="flex flex-col ml-4">
            <p className="font-extrabold  text-[15px]">{total}</p>
            <p className="text-sm text-gray-600">{first}</p>
          </div>
        ) : (
          <p className="ml-2 text-[15px]">
            {first} {last}
          </p>
        )}
      </div>
      <div className="col-span-1 flex items-center">
        {order ? (
          <p
            className={`ml-auto sm:ml-4 md:ml-0 text-sm text-gray-700 p-2 rounded-lg ${bgColor}`}
          >
            {status}
          </p>
        ) : (
          <p className="ml-auto sm:ml-4 md:ml-0 text-sm text-gray-600">
            {first}@gmail.com
          </p>
        )}
      </div>
      <div className="hidden col-span-1 md:flex items-center">
        <p className="ml-auto md:ml-0 text-sm ">{date}</p>
      </div>
      <div className="hidden sm:flex col-span-1 md:flex items-center ">
        <p className="ml-auto md:ml-0 text-sm">{method}</p>
        <BiDotsVerticalRounded size={20} className="ml-auto" />
      </div>
    </li>
  );
};

export default GridItem;
