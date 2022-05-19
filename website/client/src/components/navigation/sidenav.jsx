export default function SideNavigation({items}) {
  return (
      <div className="flex flex-col w-56 bg-gray-100  overflow-hidden">
        <ul className="flex flex-col py-4">
          <li>{items}</li>
        </ul>
    </div>
  );
}
