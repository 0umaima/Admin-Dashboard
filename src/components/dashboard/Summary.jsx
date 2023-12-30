import { useState } from "react";
//import component
import DropDownList from "./global/DropDownList";
// import icon
import arrow from "../../assets/icons/fi_chevron-down.svg";
import { Dropdown } from "flowbite-react";

function Summary() {
  const choices = ["Last 7 Days", "Last 30 Days", "Last 365 Days"];
  const categoryChoice = ["Sales", "Orders", "Customers", "Cart"];

  const [listCategoryChoice, setListCategoryChoice] = useState(
    () => categoryChoice[0]
  );

  const handleListCategoryChoice = (category) => {
    setListCategoryChoice(category);
  };



  return (
    <div
      id="summary"
      className="bg-white rounded-xl row-start-10 row-end-12 md:row-start-5 md:row-end-7 md:col-end-5 md:col-start-1 lg:row-start-4  lg:row-end-6 p-5 flex flex-col h-full font-Inter gap-5"
    >
      {/* Heading */}
      <div className="flex justify-start  md:items-center md:justify-between">
        <div className="flex  md:items-center  md:gap-4 ">
          <h1 className="text-dark-gray font-medium text-lg px-1">Summary</h1>
          <div className="flex flex-col justify-end  gap-5 pt-2 ml-auto">
            <div className="md:hidden">
              <DropDownList
                choices={choices}
                className="text-black01 text-sm md:text-base"
                strokeColor="#1C1D22"
              />
            </div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <div className="bg-light-pink-3 w-28 md:w-32 h-8 rounded-lg flex items-center justify-between px-3">
                  <span className=" font-Inter text-sm md:text-base text-raspberry">
                    {listCategoryChoice}
                  </span>
                  <img src={arrow} alt="arrow-down" className="size-5" />
                </div>
              )}
            >
              {categoryChoice.map((category) => (
                <Dropdown.Item
                  key={category}
                  onClick={() => handleListCategoryChoice(category)}
                >
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </div>
        <div className="hidden md:block">
          <DropDownList
            choices={choices}
            className="text-black01"
            strokeColor="#1C1D22"
          />
        </div>
      </div>
      {/* Bars Chart */}
      <div className="flex items-center">
      </div>
    </div>
  );
}

export default Summary;
