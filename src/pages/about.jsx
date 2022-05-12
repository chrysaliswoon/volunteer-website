import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import volunteerImg from "../assets/images/volunteer.jpg"

export default function AboutPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar />
        </header>
        <main className="md:container md:mx-auto">
          <img className="w-full h-full object-cover" src={volunteerImg} alt="" />
          <h1 className="text-xl py-10 items-center">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>

        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    );
}