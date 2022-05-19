import NavigationBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import PrimaryItems from "../components/navigation/navbarPrimary";
import SecondaryItems from "../components/navigation/navbarSecondary";
import SideNavigation from "../components/navigation/sidenav";
import SideNavItems from "../components/navigation/sidebarItems";
import EventForm from "../components/forms/event";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="h-10">
        <NavigationBar
          primaryNavItems={PrimaryItems}
          primaryNavCSS="invisible"
          secondaryNavItems={SecondaryItems}
          secondaryNavCSS="invisible"
        />
        <div className="min-h-screen flex flex-row bg-gray-300">
          <SideNavigation items={SideNavItems} />
          <div className="px-10 py-10 items-center justify-center">
            <h1 className="text-xl">Basic Info</h1>
            <p>
              Create a title for your event and add details about the event
              which makes it unique and interesting
            </p>
            <div className="py-10">
              <EventForm />
            </div>
          </div>
        </div>
      </header>
      <main className="md:container md:mx-auto">
        <div></div>
      </main>

      <footer className="h-0">
        <Footer />
      </footer>
    </div>
  );
}
