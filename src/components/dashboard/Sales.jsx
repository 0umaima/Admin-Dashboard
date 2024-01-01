import { useState, useEffect } from "react";
//import components
import DropDownList from "./global/DropDownList";
//import icons
import sales from "../../assets/icons/sales.svg";
//import db 
import salesDb from "../../../db.json"

function Sales() {
  const choices = ["Last Week", "Last Month", "Last Year"];

  const [salesAmount, setSalesAmount] = useState(0);
  const [salesPercentage, setSalesPercentage] = useState(0);
  const [volume, setVolume] = useState(0);

  
  useEffect(() => {
    // Set the initial state using the data from db.json
    setSalesAmount(salesDb.sales.amount);
    setSalesPercentage(salesDb.sales.percentage);
    setVolume(salesDb.sales.volume);
  }, []);

  return (
    <div
      id="sales"
      className="bg-white rounded-xl row-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 py-7 px-4 md:p-4 flex flex-col justify-between gap-7"
    >
      <div className="flex items-center justify-between">
        <div className="bg-light-pink size-12 md:size-10 rounded-lg flex items-center justify-center">
          <img src={sales} alt="Sales" className="size-7 md:size-6" />
        </div>
        <DropDownList choices={choices} className="text-light-gray-3" />
      </div>
      <div className="flex items-center gap-14 md:gap-16 lg:gap-11 xl:gap-16">
        <div className="flex flex-col justify-start  gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Sales
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
            ₦{salesAmount}K
            </span>
            <span className="text-sm md:text-xs font-normal text-green-600 font-Inter">
              {salesPercentage >= 0 ? "+" : "-"}
              {Math.abs(salesPercentage.toFixed(2))}%
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start  gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Volume
          </span>
          <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
            {volume}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sales;
