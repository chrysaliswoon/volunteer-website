import NavigationBar from "../../components/navigation/navbar";
import Header from "../../components/forms/components/header";
import Register from "../../components/forms/components/register";
import Footer from "../../components/layout/footer";

export default function RegisterPage() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <Register />
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
