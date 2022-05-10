import Carousel from "../components/carousel";
import NavigationBar from "../components/navbar";
import Table from "../components/table";
import TableBody from "../components/tableBody";

export default function HomePage() {
  return (
    <div>
      <NavigationBar />
      <div className="md:container md:mx-auto">
        <Carousel />
      </div>
      <div className="md:container md:mx-auto">
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
      </div>
    </div>
  );
}
