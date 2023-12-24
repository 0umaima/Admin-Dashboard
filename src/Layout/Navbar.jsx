import bell from "../assets/icons/notification.svg"
import logo from "../assets/logo.svg"
function Navbar() {
  return (
    <div className="w-full h-20 border-b-2 border-light-gray flex justify-between items-center px-7">

        <h1 className="text-2xl font-semibold text-dark-gray">Dashboard</h1>

        <div className="flex items-center gap-6">
        {/* Notifications icon */}
        <div className="size-10 bg-light-pink rounded-3xl relative flex items-center justify-center mx-6">
            <img src={bell} alt="notifications" className="size-6"/>
            <div className="size-3 p-2 left-6 -top-2 bg-raspberry rounded-3xl absolute  flex justify-center items-center    ">
                <span className="text-xs font-bold text-white">1</span>
            </div>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-end">
            <h1 className="text-xl font-medium ">Anima Agrawal</h1>
            <h1 className="text-base font-medium text-light-gray-1">Company LLC</h1>
         </div>

            <img src={logo} alt="Profile" className="size-11"/>
        </div>
       
    </div>
  )
}

export default Navbar;