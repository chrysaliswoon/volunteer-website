import DashboardCards from "./dashboardCard";

export default function DashboardContent() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div>
        <DashboardCards
          imgsrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80"
          imgalt="event"
          title="Create Event"
          description="Let the community know what's next!"
          button="Create New Event"
          onClick="create"
        />
      </div>
      <div>
        <DashboardCards
          imgsrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80"
          imgalt="profile"
          title="Profile"
          description="Check out your profile"
          button="Profile"
          onClick="profile"
        />
      </div>
    </div>
  );
}
