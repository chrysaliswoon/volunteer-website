// import logo from "../../assets/images/logo.png"
import PrimaryNavBarItems from "../../data/priNavItems";

export default function NavigationBar({
  primaryNavItems,
  primaryNavCSS,
  secondaryNavItems,
  secondaryNavCSS,
}) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo  */}
              <a href="/" className="flex items-center py-4 px-2">
                {/* <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> */}
                <span className="font-semibold text-gray-500 text-lg">
                  Zhenghua Youth Network
                </span>
              </a>
            </div>
            {/* Primary Navbar items  */}
            <div className={primaryNavCSS}>{primaryNavItems}</div>
          </div>
          {/* Secondary Navbar items */}
          <div className={secondaryNavCSS}>{secondaryNavItems}</div>
          {/* Mobile menu button  */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu  */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            {PrimaryNavBarItems.map((items, index) => (
              <a
                key={index}
                href={items.link}
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                {items.alt}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
