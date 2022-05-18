import NavigationBar from "../../components/navigation/navbar";
import Table from "../../components/table/table";
import TableBody from "../../components/table/tableBody";
import Footer from "../../components/navigation/footer";
import PrimaryItems from "../../components/navigation/navbarPrimary";
import SecondaryItems from "../../components/navigation/navbarSecondary";

export default function EventPage() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <NavigationBar
            primaryNavItems={PrimaryItems}
            primaryNavCSS="hidden md:flex items-center space-x-3"
            secondaryNavItems={SecondaryItems}
            secondaryNavCSS="hidden md:flex items-center space-x-3"
          />
        </header>
        <main className="md:container md:mx-auto">
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