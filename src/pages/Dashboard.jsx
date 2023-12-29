import Layout from "../Layout/Layout";
import Cart from "../components/dashboard/Cart";
import Customers from "../components/dashboard/Customers";
import Marketing from "../components/dashboard/Marketing";
import Orders from "../components/dashboard/Orders";
import OrdersList from "../components/dashboard/OrdersList";
import Products from "../components/dashboard/Products";
import Sales from "../components/dashboard/Sales";
import Summary from "../components/dashboard/Summary";

function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 grid-rows-11 md:grid-rows-10 lg:grid-rows-5 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-5 ">
        <OrdersList />
        <Products />
        <Cart />
        <Marketing />
        <Summary />
        <Orders />
        <Customers />
        <Sales />
      </div>
    </Layout>
  );
}

export default Dashboard;
