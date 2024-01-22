import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>
       <Footer></Footer>
      </div>
    );
};

export default Main;