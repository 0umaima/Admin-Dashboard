import DoughnutData from "./charts/Doughnut";
import DropDownList from "./global/DropDownList";


function Marketing() {
  const choices = ['Last Week', 'Last Month', 'Last Year'];

  return (
    <div
      id="marketing"
      className="bg-white rounded-xl row-start-6 row-end-8 md:row-start-3 md:row-end-5 md:col-end-3 md:col-start-1 lg:row-start-2  lg:row-end-4 p-5 flex flex-col h-full font-Inter gap-5"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-dark-gray font-medium text-lg ">Marketing</h1>
        <DropDownList choices={choices} className="text-light-gray-3"/>
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-3 xl:gap-6">
        <div className="flex items-center gap-1 md:gap-2 lg:gap-1 xl:gap-2">
          <div className="size-2 md:size-3 lg:size-2 xl:size-3 rounded-full text-dark-gray bg-raspberry">
            {/* red circle */}
          </div>
          <p className="text-gray-text-color text-sm lg:text-xs xl:text-sm">
            Acquisition
          </p>
        </div>

        <div className="flex items-center gap-1 md:gap-2 lg:gap-1 xl:gap-2">
          <div className="size-2 md:size-3 lg:size-2 xl:size-3 rounded-full text-dark-gray bg-chart-bleu">
            {/* Bleu circle */}
          </div>
          <p className="text-gray-text-color text-sm lg:text-xs xl:text-sm">
            Purchase
          </p>
        </div>

        <div className="flex items-center gap-1 md:gap-2 lg:gap-1 xl:gap-2">
          <div className="size-2 md:size-3 lg:size-2 xl:size-3 rounded-full text-dark-gray bg-chart-yellow">
            {/* Yellow circle */}
          </div>
          <p className="text-gray-text-color text-sm lg:text-xs xl:text-sm">
            Retention
          </p>
        </div>
      </div>
      {/* Chart */}
      <div className="flex justify-center items-center">
        </div>
    </div>
  );
}

export default Marketing;
