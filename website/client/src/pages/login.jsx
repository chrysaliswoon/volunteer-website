import NavigationBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import LoginForm from "../components/forms/login";
import loginImg from "../assets/images/login.jpg";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="h-10">
        <NavigationBar />
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
