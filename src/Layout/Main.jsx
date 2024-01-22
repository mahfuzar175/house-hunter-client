import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nabvar from "../Pages/Shared/Nabvar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nabvar></Nabvar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
