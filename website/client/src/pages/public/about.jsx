import NavigationBar from "../../../../frontend/src/components/navigation/navbar";
import Footer from "../../../../frontend/src/components/navigation/footer";
import PrimaryItems from "../../../../frontend/src/components/navigation/navbarPrimary";
import SecondaryItems from "../../../../frontend/src/components/navigation/navbarSecondary";

export default function AboutPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar
            primaryNavItems={PrimaryItems}
            primaryNavCSS="hidden md:flex items-center space-x-3"
            secondaryNavItems={SecondaryItems}
            secondaryNavCSS="hidden md:flex items-center space-x-3"
          />
        </header>
        <div className="justify-between">
          <main className="md:container md:mx-auto">
            <h1 className="text-xl py-10 items-center">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </main>
        </div>
        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}