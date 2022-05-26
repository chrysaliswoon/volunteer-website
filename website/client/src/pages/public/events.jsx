import EventTable from "../../components/dataDisplay/events";
import Footer from "../../components/layout/footer";
import NavigationBar from "../../components/navigation/navbar";

export default function EventPage() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>
          <EventTable />
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
