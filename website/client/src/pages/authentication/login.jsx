import NavigationBar from "../../components/navigation/navbar";
// import Header from "../../components/forms/components/header";
// import Login from "../../components/forms/components/login";
import Footer from "../../components/layout/footer";
import LoginForm from "../../components/forms/login";

export default function LoginPage() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>
          <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
            <div className="max-w-md w-full space-y-8">
              {/* <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/register"
              />
              <Login /> */}
              <LoginForm />
            </div>
          </div>
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
