//import icons
import cart from "../../assets/icons/cart.svg";
//import components
import DropDownList from "./global/DropDownList"
function Cart() {
 

  return (
    <div
        id="cart"
        className="bg-white rounded-xl row-start-4 md:row-start-4 md:row-end-5  md:col-end-5 md:col-start-3 lg:row-start-3  lg:row-end-4 p-4 flex flex-col justify-between gap-7"
      >
       <div className="flex items-center justify-between">
        <div className="bg-light-yellow  size-10 rounded-lg flex items-center justify-center">
          <img
            src={cart}
            alt="cart"
            className="size-6"
          />
        </div>
        <DropDownList/>
        
      </div>
      <div className="flex items-center gap-14 md:gap-16 lg:gap-11 xl:gap-16">
        <div className="flex flex-col justify-start">
          <span className="text-red text-base font-normal font-Inter">
            Abandoned Cart
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
              0%
            </span>
            <span className="text-xs font-normal text-green-600 font-Inter">
              +0.00%
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-light-gray-2 text-base font-normal font-Inter">
            Customers
          </span>
          <span className="text-xl xl:text-2xl font-medium text-dark-gray font-Poppins">
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cart