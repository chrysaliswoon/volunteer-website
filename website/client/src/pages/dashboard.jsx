import NavigationBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="h-10">
        <NavigationBar />
      </header>
      <main className="md:container md:mx-auto">
        <div>
        </div>
      </main>

      <footer className="h-10">
        <Footer />
      </footer>
    </div>
  );
}