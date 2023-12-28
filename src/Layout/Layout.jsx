import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="bg-light-gray p-2 md:p-5 lg:p-7">{children}</div>
    </>
  );
}

export default Layout;
