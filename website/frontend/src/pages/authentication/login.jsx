import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/layout/footer";
import Header from "../../components/forms/formComponents/Header";
import Login from "../../components/forms/formComponents/Login";

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
            linkUrl="/signup"
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
