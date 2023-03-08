import React from 'react';
import { data } from '@/data/data';
import GridItem from './GridItem';

const PageGrid = ({ orders }) => {
  return (
    <div className="bg-white rounded-lg px-4 py-6 w-full shadow-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pb-4 text-gray-900 px-2">
        <span className="flex">{`${orders ? 'Order' : 'Name'}`}</span>
        <span className="text-right sm:text-left sm:ml-4 md:ml-0">{`${
          orders ? 'Status' : 'Email'
        }`}</span>
        <span className="hidden md:flex">Last Order</span>
        <span className="hidden sm:flex ml-auto md:ml-0">Method</span>
      </div>
      <ul className="flex flex-col space-y-3">
        {data.map((customer, id) => (
          <GridItem
            key={id}
            customer={customer}
            order={orders ? true : false}
          />
        ))}
      </ul>
    </div>
  );
};

export default PageGrid;
