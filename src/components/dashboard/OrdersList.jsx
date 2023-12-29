//import icons
import { Link } from "react-router-dom";
import Bag from "../../assets/icons/Bag.svg";
import Heart from "../../assets/icons/Heart.svg";
function OrdersList() {
  return (
    <div
      id="orders-list"
      className="bg-white rounded-xl row-start-8 row-end-10 md:row-start-7 md:row-end-11 md:col-start-1 md:col-end-5 lg:row-start-2 lg:col-start-5 lg:row-end-6 lg:col-end-8 p-5 flex flex-col h-full"
    >
      <h1 className="h-[10%] text-dark-gray font-medium text-lg font-Inter">
        Recent Orders
      </h1>
      <div className="flex flex-col items-center justify-center h-[90%] py-11  lg:px-11 xl:px-32 gap-5 ">
        <div className="border-border-gray border-2 bg-main-gray rounded-full size-32 md:size-40 flex items-center justify-center mb-5 md:mb-7 lg:mb-11">
          <img src={Bag} alt="bag" className="size-14 md:size-16" />
        </div>
        <h1 className="text-black text-xl font-medium  font-Poppins">
          No Orders Yet?
        </h1>
        <p className="font-Inter text-light-gray-2 text-center">
          Add products to your store and start selling to see orders here.
        </p>
        <Link to="/home/dashboard/add-product">
          <button className="bg-raspberry text-white flex items-center justify-center gap-5 rounded-xl w-48 p-3">
            <img src={Heart} alt="products" className="size-7" />
            <span className="font-Inter font-light">New Product</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrdersList;
