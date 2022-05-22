
import NavigationBar from "../../components/navigation/navbar";
import Header from "../../components/forms/components/header";
import Login from "../../components/forms/components/login";
import Footer from "../../components/layout/footer";

export default function LoginPage() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/register"
          />
          <Login />
        </main>
      </div>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
