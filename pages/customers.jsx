import { data } from '@/data/data';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Customer from '@/components/Customer';

const customers = () => {
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="flex justify-between pb-4 text-gray-800">
        <h2>Customers</h2>
        <h2>Welcome Back, Dalton</h2>
      </div>
      <div className="bg-white rounded-lg px-4 py-6 w-full shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pb-4 text-gray-700 px-2">
          <div className="flex items-start col-span-1">
            <h2>Name</h2>
          </div>
          <div className="flex items-start col-span-1">
            <h2 className="ml-auto sm:ml-4 md:ml-0">Email</h2>
          </div>
          <div className="hidden md:flex items-start col-span-1">
            <h2>Last Order</h2>
          </div>
          <div className="hidden sm:flex ml-auto md:ml-0 items-start col-span-1">
            <h2>Method</h2>
          </div>
        </div>
        <ul className="flex flex-col space-y-3">
          {data.map((customer, id) => (
            <Customer key={id} customer={customer} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default customers;
