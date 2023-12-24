import { Link, useLocation } from "react-router-dom";
import home from "../assets/icons/Home.svg";

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((pathname) => pathname !== '');
  
    return (
      <div className="h-11 border-b-2 border-light-gray px-7 flex items-center gap-5">
        <Link to="/">
          <img src={home} alt="home" className="size-6"/>
        </Link>
        {pathnames.map((pathname, index) => {
          const routePath = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
  
          return (
            <div key={routePath} className="text-xl font-medium flex justify-center gap-5 text-light-gray-2">
              <span>/</span>
              {isLast ? (
                <span>{pathname}</span>
              ) : (
                <Link to={routePath}>{pathname}</Link>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Breadcrumbs;