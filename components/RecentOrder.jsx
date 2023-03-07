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
    <li className="flex items-center p-2 my-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer">
      <div className="bg-purple-100 rounded-lg p-3">
        <FaShoppingBag size={20} className="text-purple-800" />
      </div>
      <div className="pl-4">
        <p className="text-gray-800 font-bold">${total}</p>
        <p className="text-gray-400 text-sm">{first}</p>
      </div>
      <p className="lg:flex md:hidden absolute right-6 text-sm">{date}</p>
    </li>
  );
};

export default RecentOrder;
