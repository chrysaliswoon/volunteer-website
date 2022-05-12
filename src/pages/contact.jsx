import NavigationBar from "../components/navbar";
import Table from "../components/table";
import TableBody from "../components/tableBody";
import Footer from "../components/footer";

export default function ContactPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar />
        </header>
        <main className="md:container md:mx-auto">
          <h1>This contains contact form</h1>
        </main>

        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}