import React from 'react';
import { data } from '@/data/data';
import RecentOrder from './RecentOrder';

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 h-[50vh] lg:h-[70vh] m-auto p-4 bg-white rounded-lg shadow-sm overflow-scroll relative">
      <h1 className="text-xl text-gray-600 pb-2">Recent Orders</h1>

      <ul className="w-full space-y-4">
        {data.map((order, id) => (
          <RecentOrder order={order} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
