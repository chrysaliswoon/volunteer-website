import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/layout/footer";


export default function Dashboard({dashboardContent}) {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>
          <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
              {dashboardContent}
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
