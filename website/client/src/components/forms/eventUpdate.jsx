import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

export default function UpdateEventForm() {
    let { id } = useParams();
    const [form, setForm] = useState([]);
    const navigate = useNavigate();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


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
            setForm(data);
          })
          .catch((error) => console.log("Error:", error));
        };
    });

  
    const updateEvent = async (event) => {
      event.preventDefault();
      const URL = `http://localhost:3300/api/event/${id}`;
      const updateEvent = { form, ...event };
  
      fetch(URL, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEvent),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          navigate("/events");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };

    const deleteEvent = async (event) => {
      const URL = `http://localhost:3300/api/event/${id}`;
      fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then((data) => {
        console.log("Event has been deleted!", data);
        navigate("/events");

      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }
  
    return (
        <form>
          <div className="w-full max-w-xs py-5">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="description"
            >
              Event Title
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="eventTitle"
              id="eventTitle"
              defaultValue={form.eventTitle}
            />
            {errors?.eventTitle?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full max-w-xs py-5">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="eventStart"
              >
                Start Date and Time
              </label>
              <input
                className="select select-bordered w-full max-w-xs"
                type="datetime-local"
                name="eventStart"
                id="eventStart"
                // defaultValue={form.eventStart}
              />
              {errors?.eventStart?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
            <div className="w-full max-w-xs py-5">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="eventEnd"
              >
                End Date and Time
              </label>
              <input
                className="select select-bordered w-full max-w-xs"
                type="datetime-local"
                name="eventEnd"
                id="eventEnd"
                // defaultValue={form.eventEnd}
              />
              {errors?.eventEnd?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
          </div>
          <div className="w-full max-w-xs py-5">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventLocation"
            >
              Event Location
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="eventLocation"
              id="eventLocation"
              defaultValue={form.eventLocation}
            />
          </div>
          <div className="w-full max-w-xs py-5">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="volunteersRequired"
            >
              Volunteers Required
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="number"
              name="volunteersRequired"
              id="volunteersRequired"
              defaultValue={form.volunteersRequired}
            />
            {errors?.volunteersRequired?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="w-full max-w-xs py-5">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventDescription"
            >
              Event Description
            </label>
            <textarea
              className="textarea textarea-bordered"
              type="text"
              name="eventDescription"
              id="eventDescription"
              defaultValue={form.eventDescription}
            />
          </div>
          <div className="w-full max-w-xs py-5">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventStatus"
            >
              Event Status
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("eventStatus")}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="w-full max-w-xs py-5">
            <button
              className="btn btn-outline btn-primary"
              type="submit"
              name="updateEvent"
              id="updateEvent"
              description="updateEvent"
              onClick={handleSubmit(updateEvent)}
            >
              Update Event
            </button>
            
            <button
              className="btn btn-outline btn-primary"
              type="submit"
              name="deleteEvent"
              id="deleteEvent"
              description="deleteEvent"
              onClick={handleSubmit(deleteEvent)}
            >
              Delete Event
            </button>
          </div>
        </form>
    );
  }