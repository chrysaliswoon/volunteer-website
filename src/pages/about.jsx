import NavigationBar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar />
        </header>
        <main className="md:container md:mx-auto">
          <h1>This contains information about the organization</h1>
        </main>

        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}