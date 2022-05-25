import EventTable from "../../components/dataDisplay/events";
import Footer from "../../components/layout/footer";
import HeroCard from "../../components/layout/hero";
import NavigationBar from "../../components/navigation/navbar";

export default function HomePage() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>
          <HeroCard />
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
