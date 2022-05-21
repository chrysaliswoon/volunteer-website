import Header from "../../components/forms/formComponents/Header";
import Signup from "../../components/forms/formComponents/Register";
import NavigationBar from "../../components/navigation/navbar";
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
            linkUrl="/"
          />
          <Signup />
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
