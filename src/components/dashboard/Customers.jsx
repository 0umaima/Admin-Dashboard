//import icons
import users from "../../assets/icons/2User.svg";
//import component
import DropDownList from "./global/DropDownList";
function Customers() {
  const choices = ['Last Week', 'Last Month', 'Last Year'];

  return (
    <div
      id="customers"
      className="bg-white rounded-xl row-start-2 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-5 flex flex-col justify-between py-7 px-4 md:p-4 gap-7 "
    >
      <div className="flex items-center justify-between">
        <div className="bg-light-yellow size-12 md:size-10 rounded-lg flex items-center justify-center">
          <img
            src={users}
            alt="users"
            className="size-7 md:size-6"
          />
        </div>
       <DropDownList choices={choices} className="text-light-gray-3"/>
        
      </div>
      <div className="flex items-center gap-14 md:gap-16 lg:gap-11 xl:gap-16">
        <div className="flex flex-col justify-start  gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Customers
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
              0
            </span>
            <span className="text-sm md:text-xs font-normal text-green-600 font-Inter">
              +0.00%
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start  gap-3">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Active
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
              0
            </span>
            <span className="text-sm md:text-xs font-normal text-green-600 font-Inter">
              +0.00%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
