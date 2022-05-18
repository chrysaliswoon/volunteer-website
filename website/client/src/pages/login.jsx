import NavigationBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import LoginForm from "../components/forms/login";
import PrimaryItems from "../components/navigation/navbarPrimary";
import SecondaryItems from "../components/navigation/navbarSecondary";

export default function LoginPage() {
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
      <div>
        <main className="md:container md:mx-auto">
          <LoginForm />
        </main>
      </div>

      <footer className="h-10">
        <Footer />
      </footer>
    </div>
  );
}
