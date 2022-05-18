export default function SideNavigation({items}) {
  return (
    <div class="min-h-screen flex flex-row bg-gray-300">
      <div class="flex flex-col w-56 bg-gray-100  overflow-hidden">
        <ul class="flex flex-col py-4">
          <li>{items}</li>
        </ul>
      </div>
    </div>
  );
}
