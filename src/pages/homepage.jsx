import NavigationBar from "../components/navbar";
import Table from "../components/table";
import TableBody from "../components/tableBody";

export default function HomePage() {
  return (
    <div>
          <NavigationBar />
          <div>
              Insert Gallery / Banner here
          </div>
      <div>
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
