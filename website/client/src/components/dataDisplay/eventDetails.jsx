import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { parseJSON, format } from "date-fns";

export default function EventDetails() {
  let { id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:3300/api/event/${id}`;
    return () => {
      fetch(URL, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setEventDetails(data);
        })
        .catch((error) => console.log("Error:", error));
    };
  });

  return (
    <div>
      <h1>{eventDetails.eventTitle}</h1>
      <div>{eventDetails.eventDescription}</div>
      <div>Location: {eventDetails.eventLocation}</div>
      <div>
        Start Date & Time:{" "}
        {/* {format(parseJSON(eventDetails.eventStart), "MM MMM yyyy")} */}
      </div>
      <div>
        End Date & Time:{" "}
        {/* {format(parseJSON(eventDetails.eventEnd), "MM MMM yyyy")} */}
      </div>
      <div>
        Volunteers Required:{" "}
        {eventDetails.volunteersRequired}
      </div>
    </div>
  );
}
