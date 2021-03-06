import { Link } from "react-router-dom";

export default function NavigationBar({signedIn}) {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown text-black">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          ZHYN
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li style={{ display: {signedIn} ? "show" : "none" }}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Log In
        </Link>
      </div>
    </div>
  );
}
