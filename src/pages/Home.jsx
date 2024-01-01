import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
//import image
import home from "../assets/home.svg";
function Home() {
  return (
    <Layout>
      <div className="h-screen w-full flex flex-col lg:flex-row bg-white rounded-2xl items-center justify-center font-Poppins">
        <div className=" h-1/3 lg:h-full w-full lg:w-1/2 flex items-end md:items-start lg:items-center justify-center ">
          <img src={home} alt="home" className="p-18 md:p-20 lg:p-1"/>
        </div>
        <div className="h-2/3 lg:h-full w-full lg:w-1/2  flex flex-col items-center justify-center gap-20 md:gap-28 ">
          <div className="font-bold md:font-semibold text-xl md:text-2xl xl:text-4xl">Welcome To Your BackOffice</div>
          <div className="flex  flex-col justify-center text-center gap-5 ">
            <Link to={"/home/dashboard"} className="text-raspberry font-medium lg:text-xl xl:text-2xl">Go To Dashbord</Link>
            <p className="font-normal">or</p>
            <Link to={"/home/dashboard/add-product"} className="font-normal hover:text-raspberry">Add A New Product</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
