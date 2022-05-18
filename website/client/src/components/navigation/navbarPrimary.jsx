import PrimaryNavBarItems from "../../data/priNavItems";

const PrimaryItems = PrimaryNavBarItems.map((items, index) => (
  <a
    key={index}
    href={items.link}
    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
  >
    {items.alt}
  </a>
));

export default PrimaryItems