//import icons
import users from "../../assets/icons/2User.svg";
//import component
import DropDownList from "./global/DropDownList";
function Customers() {
 
  return (
    <div
      id="customers"
      className="bg-white rounded-xl row-start-2  md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-5 flex flex-col justify-between p-4 gap-7 "
    >
      <div className="flex items-center justify-between">
        <div className="bg-light-yellow size-10 rounded-lg flex items-center justify-center">
          <img
            src={users}
            alt="users"
            className="size-6"
          />
        </div>
       <DropDownList/>
        
      </div>
      <div className="flex items-center gap-14 md:gap-16 lg:gap-11 xl:gap-16">
        <div className="flex flex-col justify-start">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Customers
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
              0
            </span>
            <span className="text-xs font-normal text-green-600 font-Inter">
              +0.00%
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Active
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
              0
            </span>
            <span className="text-xs font-normal text-green-600 font-Inter">
              +0.00%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
