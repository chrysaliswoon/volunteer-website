import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/layout/footer";
import UpdateEventForm from "../../components/forms/eventUpdate";


export default function UpdateEventPage() {
  return (
    <div>
      <div>
        <header>
          <NavigationBar />
        </header>
        <div>
          <main>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
              <div className="max-w-md w-full space-y-8">
                  <UpdateEventForm />
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
    </div>
  );
}
