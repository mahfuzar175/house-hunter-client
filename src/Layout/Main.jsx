import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nabvar from "../Pages/Shared/Nabvar";

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes('register');
  const isRegisterPage = location.pathname.includes('login');
  return (
    <div className="w-full lg:max-w-[1240px] mx-auto">
      { isLoginPage || isRegisterPage || <Nabvar></Nabvar>}
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      { isLoginPage || isRegisterPage ||  <Footer></Footer>}
    </div>
  );
};

export default Main;
