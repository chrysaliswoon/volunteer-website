import { useState, useEffect } from "react";
import { parseJSON, format } from "date-fns";

export default function EventTable() {
  const [table, setTable] = useState([]);
  
  useEffect(() => {
    const URL = "http://localhost:3300/api/event";
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
          setTable(data);
        })
        .catch((err) => console.log(err));
    };
  });

  const eventDetails = table.map((data, index) => (
    <tr key={index}>
      <td className="flex items-center space-x-3">
        <div>
          {/* <div className="avatar">
                  <div className="w-12 h-12 mask mask-squircle">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
          <div>
            <div className="font-bold">
              {format(parseJSON(data.eventStart), "MM/dd/yyyy")}
            </div>
            <div className="text-sm opacity-50">{data.eventLocation}</div>
          </div>
        </div>
      </td>
      <td>{data.eventTitle}</td>
      <td>{data.volunteersRequired}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Learn More</button>
      </th>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Date, Time & Location</th>
            <th>Event</th>
            <th>Volunteers</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{eventDetails}</tbody>
        <tfoot>
          <tr>
            <th>Date & Time</th>
            <th>Event</th>
            <th>Volunteers</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
