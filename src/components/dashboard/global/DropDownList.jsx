//import flowbite items
import { Dropdown } from "flowbite-react";
//import hooks
import { useListOptions } from "../../../hooks/useListOptions";

function DropDownList({choices, className, strokeColor}) {
  const { listChoice, renderChoice } = useListOptions(choices);
  return (
    <>
      <Dropdown
        label=""
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="flex items-center gap-3">
            <span className={`flex items-center gap-3 ${className}`}>
              {listChoice}
            </span>
            <button>
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke={strokeColor || "#BEC0CA"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      >
        {choices.map((choice) => (
          <Dropdown.Item key={choice} className={className}>{renderChoice(choice)}</Dropdown.Item>
        ))}
      </Dropdown>
    </>
  );
}

export default DropDownList;
