import React from "react";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 grid-rows-8 md:grid-rows-20 lg:grid-rows-5 md:grid-cols-4 lg:grid-cols-7 gap-5 h-full">
      <div
        id="orders-list"
        className="bg-white rounded-xl row-start-7 md:row-start-10 md:row-end-20 md:col-start-1 md:col-end-5 lg:row-start-2 lg:col-start-5 lg:row-end-6 lg:col-end-8"
      >
        orders-list
      </div>
      <div
        id="products"
        className="bg-white rounded-xl row-start-5 md:row-start-4 md:row-end-6 md:col-start-3 md:col-end-5  lg:row-start-2  lg:row-end-3 "
      >
        products
      </div>
      <div
        id="cart"
        className="bg-white rounded-xl row-start-4 md:row-start-6 md:row-end-8  md:col-end-5 md:col-start-3 lg:row-start-3  lg:row-end-4"
      >
       cart
      </div>
      <div
        id="marketing"
        className="bg-white rounded-xl row-start-6 md:row-start-4 md:row-end-8 md:col-end-3 md:col-start-1 lg:row-start-2  lg:row-end-4 "
      >
        marketing
      </div>
      <div
        id="summary"
        className="bg-white rounded-xl row-start-8 md:row-start-8 md:row-end-10 md:col-end-5 md:col-start-1 lg:row-start-4  lg:row-end-6 "
      >
       summary
      </div>
      <div
        id="orders"
        className="bg-white rounded-xl row-start-3 md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-5 lg:row-start-1 lg:col-start-5 lg:row-end-2 lg:col-end-8"
      >
        orders
      </div>
      <div
        id="customers"
        className="bg-white rounded-xl row-start-2  md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-5 "
      >
        customers
      </div>
      <div
        id="sales"
        className="bg-white rounded-xl row-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3"
      >
        sales
      </div>
    </div>

    // <div className='flex justify-center items-center flex-col md:flex-row w-full gap-5 px-7 py-7 h-1/2 md:h-1/4'>

    //   <div className='bg-white w-full md:w-1/3 h-full rounded-2xl'>
    //     1
    //   </div>

    //   <div className='bg-white w-full md:w-1/3 h-full rounded-2xl'>
    //     2
    //   </div>

    //   <div className='bg-white w-full md:w-1/3 h-full rounded-2xl'>
    //     3
    //   </div>

    // </div>
  );
}

export default Dashboard;
