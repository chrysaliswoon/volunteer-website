import NavigationBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import ContactForm from "../components/forms/contact";
import NavItem1 from "../components/navigation/item1";

export default function ContactPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar item1={NavItem1}/>
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