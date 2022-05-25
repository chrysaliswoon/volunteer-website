import NavigationBar from "../../components/navigation/navbar"
import LoginForm from "../../components/forms/login"
import Footer from "../../components/layout/footer"
import EventForm from "../../components/forms/event"

export default function Dashboard() {
    return (
        <div>
        <header>
          <NavigationBar />
        </header>
        <div>
          <main>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
              <div className="max-w-md w-full space-y-8">
                  <EventForm />
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
    )
}