import sales from "../../assets/icons/sales.svg";
import arrow from "../../assets/icons/fi_chevron-down.svg";
function Sales() {
  return (
    <div
      id="sales"
      className="bg-white rounded-xl row-start-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 p-4 flex flex-col justify-between gap-7"
    >
      <div className="flex items-center justify-between">
        <div className="bg-light-pink size-10 rounded-lg flex items-center justify-center">
          <img src={sales} alt="Sales" className="size-6" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-light-gray-3 font-light font-Inter">This Week</span>
          <img src={arrow} alt="arrow-down" className="size-5" />
        </div>
      </div>
      <div className="flex items-center gap-14 md:gap-16 lg:gap-11 xl:gap-16">
        <div className="flex flex-col justify-start">
          <span className="text-light-gray-2 text-base font-normal font-Inter">Sales</span>
          <div className="flex items-center gap-2">
          <span className="text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">₦0.00</span>
          <span className="text-xs font-normal text-green-600 font-Inter">+0.00%</span>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-light-gray-2 text-base font-normal font-Inter">Volume</span>
          <span className="text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">0</span>
        </div>
      </div>
    </div>
  );
}

export default Sales;
