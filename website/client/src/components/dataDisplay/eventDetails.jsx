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
    <div className="py-6 border-b border-gray-200">
        <h2 className="text-2xl text-indigo-900 font-bold">{eventDetails.eventTitle}</h2>
      <div className="relative h-95">
        <img
          className="absolute inset-0 object-cover object-center w-full h-full"
          src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png"
          alt
        />
      </div>
      <p className="py-3 text-sm text-gray-700 leading-7">
      {eventDetails.eventDescription}{" "}
      </p>
      <p className="text-sm text-red-600">Test</p>
      <div className="pt-6">
        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle
                  cx={9}
                  cy={9}
                  r="7.5"
                  stroke="#718096"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 4.8335V9.00016L11.5 11.5002"
                  stroke="#718096"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="pl-1">4:00pm to 6:00pm</p>
          </div>
          <div className="flex items-center pl-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={18}
                viewBox="0 0 16 18"
                fill="none"
              >
                <circle
                  cx={8}
                  cy="8.1665"
                  r="2.5"
                  stroke="#718096"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z"
                  stroke="#718096"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="pl-1">Location: {eventDetails.eventLocation}</p>
          </div>
        </div>
        {/* <div>{eventDetails.eventDescription}</div>
      <div>Location: {eventDetails.eventLocation}</div>
      <div>
        Start Date & Time:{" "}
        {/* {format(parseJSON(eventDetails.eventStart), "MM MMM yyyy")} */}
        {/* </div> */}
        {/* <div> */}
        {/* End Date & Time:{" "} */}
        {/* {format(parseJSON(eventDetails.eventEnd), "MM MMM yyyy")} */}
        {/* </div> */}
        {/* <div>Volunteers Required: {eventDetails.volunteersRequired}</div> */}
      </div>
    </div>
  );
}
