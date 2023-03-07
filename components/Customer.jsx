import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';

const Customer = ({
  customer: {
    name: { first, last },
    date,
    method,
  },
}) => {
  return (
    <li className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-2 bg-gray-50 rounded-lg cursor-pointer">
      <div className="col-span-1 flex items-center">
        <div className="bg-purple-100 rounded-lg p-3">
          <BsFillPersonFill size={20} className="text-purple-800" />
        </div>
        <p className="ml-2 text-[15px]">
          {first} {last}
        </p>
      </div>
      <div className="col-span-1 flex items-center">
        <p className="ml-auto  sm:ml-4 md:ml-0 text-sm text-gray-600">
          {first}@gmail.com
        </p>
      </div>
      <div className="hidden col-span-1 md:flex items-center">
        <p className="ml-auto md:ml-0 text-sm text-gray-600">{date}</p>
      </div>
      <div className="hidden sm:flex col-span-1 md:flex items-center ">
        <p className="ml-auto md:ml-0 text-sm text-gray-600">{method}</p>
        <BiDotsVerticalRounded size={20} className="ml-auto" />
      </div>
    </li>
  );
};

export default Customer;
