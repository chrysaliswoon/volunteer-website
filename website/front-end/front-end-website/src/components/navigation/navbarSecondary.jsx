import SecondaryNavBarItems from "../../data/secondNavItems copy";

const SecondaryItems = SecondaryNavBarItems.map((items, index) => (
  <a
    key={index}
    href={items.link}
    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
  >
    {items.alt}
  </a>
));

export default SecondaryItems