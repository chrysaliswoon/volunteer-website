import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/layout/footer";
import LoginForm from "../../components/forms/login";
import { useState } from "react";

export default function LoginPage() {
  const [authUser, setAuthUser] = useState(true);

  return (
    <div style={{
      backgroundImage:
        "url(" +
        "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" +
        ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",}}>
      <header>
        <NavigationBar signedIn = {authUser}/>
      </header>
      <div>
        <main>
          <div className="min-h-full h-screen flex items-center justify-center px-4 sm:px-6">
              <LoginForm />
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
