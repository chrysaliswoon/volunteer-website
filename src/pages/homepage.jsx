import Carousel from "../components/carousel";
import NavigationBar from "../components/navbar";
import Table from "../components/table";
import TableBody from "../components/tableBody";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="h-10">
        <NavigationBar />
      </header>
      <main className="mb-auto h-10 md:container md:mx-auto">
        <Carousel />
        <Table
          Header1="Event"
          Header2="Date"
          Header3="Time"
          Header4="Location"
          Header5="More Info"
          TableBody={
            <TableBody
              EventName="Test Event"
              EventDate="10/02/2022"
              EventTime="10 am - 12pm"
              EventLocation="Zhenghua Community Club"
              EventButton="More Info"
            />
          }
        />
      </main>

      <footer className="h-10">
        <Footer />
      </footer>
    </div>
  );
}
