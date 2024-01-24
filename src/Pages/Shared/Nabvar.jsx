import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Nabvar = () => {
  const { logout, user } = useContext(AuthContext);
  const [loggingOut, setLoggingOut] = useState(false);


  const handleLogout = () => {
    setLoggingOut(true);
    logout()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out: ", error.message);
      })
      .finally(() => {
        setLoggingOut(false);
      });
  };
  

  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      <li>{user ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
      {!user && (
        <li>
          <Link to="/login" activeClassName="font-bold" className='font-semibold' disabled={loggingOut}>
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl font-extrabold">HOUSE HUNTER</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div id="parent-user-profile" className="flex items-center gap-x-1">
              <label
                id="user-pic"
                tabIndex={0}
                className=" btn btn-ghost btn-circle avatar flex-row-reverse"
              >
                <div className="w-24 rounded-full">
                  <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
                </div>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between font-semibold">
                  Dashboard
                  <span className="badge bg-pink-600 text-white">New</span>
                </Link>
              </li>
              {user ? (
                <>
                  {/*<li><span>{user?.displayName}</span></li>*/}
                  <li>
                    <button onClick={handleLogout} className="custom-btn font-semibold">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="custom-btn font-semibold">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
