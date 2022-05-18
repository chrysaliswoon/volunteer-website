import NavigationBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import PrimaryItems from "../components/navigation/navbarPrimary";
import SecondaryItems from "../components/navigation/navbarSecondary";
import SideNavigation from "../components/navigation/sidenav";
import SideNavItems from "../components/navigation/sidebarItems";

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
        <SideNavigation items={SideNavItems} />
      </header>
      <main className="md:container md:mx-auto">
        <div></div>
      </main>

      <footer className="h-10">
        <Footer />
      </footer>
    </div>
  );
}
