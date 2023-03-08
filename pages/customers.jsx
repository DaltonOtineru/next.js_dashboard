import { data } from '@/data/data';
import React from 'react';
import GridItem from '@/components/GridItem';
import PageGrid from '@/components/PageGrid';

const customers = () => {
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="flex justify-between pb-4 text-gray-900">
        <h2>Customers</h2>
        <h2>Welcome Back, Dalton</h2>
      </div>
      <PageGrid />
    </div>
  );
};

export default customers;
