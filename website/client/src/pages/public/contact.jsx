import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/navigation/footer";
import ContactForm from "../../components/forms/contact";
import PrimaryItems from "../../components/navigation/navbarPrimary";
import SecondaryItems from "../../components/navigation/navbarSecondary";

export default function ContactPage() {
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
        <main className="md:container md:mx-auto">
          <div>
            <h1 className="text-xl py-10 items-center">Contact Us</h1>
            <ContactForm />
          </div>
        </main>

        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}