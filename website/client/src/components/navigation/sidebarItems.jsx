import SideNavBarItems from "../../data/sideNavItems";

const SideNavItems = SideNavBarItems.map((items, index) => (
  <a
    key={index}
    href={items.link}
    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
  >
    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
      <i class="bx bx-home"></i>
    </span>
    <span class="text-sm font-medium">{items.alt}</span>
  </a>
));

export default SideNavItems;
