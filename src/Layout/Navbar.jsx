import { useState } from "react";
import { Link } from "react-router-dom";
//import icons
import bell from "../assets/icons/notification.svg";
import logo from "../assets/logo.svg";
//import flowbite components
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

function Navbar() {
  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => {
    setProfileClick(true);
  };
  return (
    <div className="w-full h-16 lg:h-20 border-b-2 border-light-gray flex justify-between items-center px-2 md:px-5 lg:px-7 font-DM">
      <h1 className="text-xl lg:text-2xl font-semibold text-dark-gray">
        Dashboard
      </h1>

      <div className="flex items-center gap-1 lg:gap-6">
        {/* Notifications icon */}
        <div className="size-8 lg:size-10 bg-light-pink rounded-3xl relative flex items-center justify-center mx-6">
          <img src={bell} alt="notifications" className="size-5 lg:size-6" />
          <div className="size-3 p-2 left-6 -top-2 bg-raspberry rounded-3xl absolute  flex justify-center items-center    ">
            <span className="text-xs font-bold text-white">1</span>
          </div>
        </div>

        {/* Profile */}
        <div className="hidden lg:flex flex-col items-end">
          <h1 className="text-xl font-medium ">Anima Agrawal</h1>
          <h1 className="text-base font-medium text-light-gray-1">
            Company LLC
          </h1>
        </div>
        <div className="flex flex-col gap-28" onClick={handleProfileClick}>
          {profileClick ? (
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <button className="bg-logo-pink size-9 lg:size-12 flex items-center justify-center rounded-xl">
                  <img src={logo} alt="Profile" className="size-6 lg:size-9" />
                </button>
              )}
            >
              <Dropdown.Header className="block lg:hidden">
                <h1 className="text-lg font-medium ">Anima Agrawal</h1>
                <h1 className="text-sm font-medium text-light-gray-1">
                  Company LLC
                </h1>
              </Dropdown.Header>
              <Link to={"/dashboard"}>
                <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
              </Link>
              <Link to={"/add-product"}>
                <Dropdown.Item icon={HiCog}>Add product</Dropdown.Item>
              </Link>
              <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <button className="bg-logo-pink size-9 lg:size-12 flex items-center justify-center rounded-xl">
              <img src={logo} alt="Profile" className="size-6 lg:size-9" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
