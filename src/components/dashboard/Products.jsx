//import icons
import folder from "../../assets/icons/Folder.svg";
function Products() {
  return (
    <div
        id="products"
        className="bg-raspberry rounded-xl row-start-5 md:row-start-3 md:row-end-4 md:col-start-3 md:col-end-5  lg:row-start-2  lg:row-end-3 flex flex-col justify-between p-4 gap-7"
      >
        <div className="flex items-center justify-between">
        <div className="bg-whiter size-10 rounded-lg flex items-center justify-center">
          <img
            src={folder}
            alt="products"
            className="size-6"
          />
        </div>
        
      </div>
      <div className="flex items-center gap-14 md:gap-16 lg:gap-11 xl:gap-16">
        <div className="flex flex-col justify-start">
          <span className="text-white text-base font-normal font-Inter">
            All Products  
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xl xl:text-2xl font-medium text-white font-Poppins">
              0
            </span>
            <span className="text-xs font-normal text-lighter-gray font-Inter">
              +0.00%
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-white text-base font-normal font-Inter">
            Active
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xl xl:text-2xl font-medium text-white font-Poppins">
              0
            </span>
            <span className="text-xs font-normal text-lighter-gray font-Inter">
              +0.00%
            </span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Products