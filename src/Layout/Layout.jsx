import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className=" ">{children}</div>
    </>
  );
}

export default Layout;
