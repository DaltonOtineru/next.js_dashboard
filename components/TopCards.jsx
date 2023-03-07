import React from 'react';

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 px-4">
      <div className="bg-white rounded-lg p-4 lg:col-span-2 flex justify-between w-full shadow-sm">
        <div className="flex flex-col w-full pb-4">
          <h3 className="text-2xl font-bold">$7,846</h3>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 rounded-lg flex justify-center items-center h-full px-2">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="bg-white rounded-lg p-4 lg:col-span-2 flex justify-between shadow-sm">
        <div className="flex flex-col w-full pb-4">
          <h3 className="text-2xl font-bold">$1,437,846</h3>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="bg-green-200 rounded-lg flex justify-center items-center h-full px-2">
          <span className="text-green-700 text-lg">+11%</span>
        </p>
      </div>
      <div className="bg-white rounded-lg p-4 lg:col-span-1 flex justify-between shadow-sm">
        <div className="flex flex-col w-full pb-4">
          <h3 className="text-2xl font-bold">11,437</h3>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-200 rounded-lg flex justify-center items-center h-full px-2">
          <span className="text-green-700 text-lg">+17%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
