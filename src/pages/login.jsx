import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/forms/login";

export default function LoginPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar />
        </header>
        <main className="md:container md:mx-auto">
          <LoginForm />
        </main>

        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}