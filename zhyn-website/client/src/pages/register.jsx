import NavigationBar from "../components/navbar";
import Footer from "../components/footer";

export default function RegisterPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar />
        </header>
        <main className="md:container md:mx-auto">
          <h1>Insert Register form here</h1>
        </main>

        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}