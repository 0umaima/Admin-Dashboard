import { useState } from "react";
//import icons
import bell from "../assets/icons/notification.svg";
import logo from "../assets/logo.svg";
//import flowbite components
import { Dropdown } from "flowbite-react";

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
        {profileClick && (
        <Dropdown
          label=""
          dismissOnClick={false}
          renderTrigger={() => (
            <img
              src={logo}
              alt="Profile"
              className="size-9 lg:size-11"
            />
          )}
        >
          <Dropdown.Header className="block lg:hidden">
           <h1 className="text-lg font-medium ">Anima Agrawal</h1>
          <h1 className="text-sm font-medium text-light-gray-1">
            Company LLC
          </h1>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      )}
      </div>
     
    </div>
  );
}

export default Navbar;
