import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/forms/contact";

export default function ContactPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar />
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