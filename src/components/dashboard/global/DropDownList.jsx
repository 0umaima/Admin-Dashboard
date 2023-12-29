//import flowbite items
import { Dropdown } from "flowbite-react";
//import hooks
import { useListOptions } from "../../../hooks/useListOptions";
//import icons
import arrow from "../../../assets/icons/fi_chevron-down.svg";



function DropDownList() {
    const { listChoice, renderChoice } =
    useListOptions();
  return (
    <>
         <Dropdown
          label=""
          dismissOnClick={false}
          renderTrigger={() => (
            <div className="flex items-center gap-3">
              <span className="text-light-gray-3 font-light font-Inter text-lg md:text-base">
                {listChoice}
              </span>
              <button>
                <img
                  src={arrow}
                  alt="arrow-down"
                  className="size-6 md:size-5"
                />
              </button>
            </div>
            
          )}
        >
          <Dropdown.Item className=" font-inter text-light-gray-3 hover:text-light-gray-1 ">{renderChoice("This Week")}</Dropdown.Item>
          <Dropdown.Item className=" font-inter text-light-gray-3 hover:text-light-gray-1 ">{renderChoice("This Month")}</Dropdown.Item>
          <Dropdown.Item className=" font-inter text-light-gray-3 hover:text-light-gray-1 ">{renderChoice("This Year")}</Dropdown.Item>
        </Dropdown>
    </>
   
  )
}

export default DropDownList