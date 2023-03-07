import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrder = ({
  order: {
    total,
    name: { first, last },
    date,
  },
}) => {
  return (
    <div className="w-full p-2 grid grid-cols-10 bg-gray-50 rounded-lg">
      <div className="col-span-1 rounded-lg bg-purple-200 text-purple-900 flex justify-center items-center">
        <FaShoppingBag size={20} />
      </div>
      <div className="col-span-9 flex justify-between">
        <div className="flex flex-col pl-4">
          <p className="font-bold">${total}</p>
          <p className="text-sm text-gray-500">
            {first} {last}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-gray-900 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
