import { useState, useEffect } from "react";
//import icons
import smallBag from "../../assets/icons/small-bag.svg";
//import components
import DropDownList from "./global/DropDownList"
//import db 
import ordersDb from "../../../db.json"
function Orders() {
  const choices = ['Last Week', 'Last Month', 'Last Year'];

  const [allOrders, setAllOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);

  useEffect(() => {
    // Set the initial state using the data from db.json
    setAllOrders(ordersDb.orders);
    setPendingOrders(ordersDb.orders.filter((order) => order.status === "pending"));
    setCompletedOrders(ordersDb.orders.filter((order) => order.status === "completed"));
  }, []);


  return (
    <div
        id="orders"
        className="bg-white rounded-xl row-start-3 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-5 lg:row-start-1 lg:col-start-5 lg:row-end-2 lg:col-end-8 flex flex-col justify-between py-7 px-4 md:p-4 gap-7"
      >
         <div className="flex items-center justify-between">
        <div className="bg-light-yellow size-12 md:size-10 rounded-lg flex items-center justify-center">
          <img
            src={smallBag}
            alt="orders"
            className="size-7 md:size-6"
          />
        </div>
        <DropDownList choices={choices} className="text-light-gray-3"/>
        
      </div>
      <div className="flex items-center gap-8 md:gap-36 lg:gap-11 xl:gap-28">
        <div className="flex flex-col justify-start  gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            All Orders
          </span>
            <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
            {allOrders.length}

            </span>
        </div>
        <div className="flex flex-col justify-start gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
           Pending
          </span>
            <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
            {pendingOrders.length}
            </span>
        </div>
        <div className="flex flex-col justify-start  gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Completed
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
            {completedOrders.length}
            </span>
            <span className="text-sm md:text-xs font-normal text-green-600 font-Inter">
              +{((completedOrders.length / allOrders.length) * 100).toFixed(2)}%

            </span>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Orders