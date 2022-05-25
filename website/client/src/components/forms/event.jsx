import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const URL = "http://localhost:3300/api/event/create";
    console.log(data);

    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((onSubmit) => onSubmit.json())
      .then((data) => {
        console.log("Success", data);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6"></div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="description"
              >
                Event Title
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="text"
                name="eventTitle"
                id="eventTitle"
                {...register("eventTitle", {
                  required: true,
                })}
              />
              {errors?.eventTitle?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventDescription"
            >
              Event Description
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="text"
              name="eventDescription"
              id="eventDescription"
              {...register("eventDescription", {
                required: true,
              })}
            />
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventLocation"
            >
              Event Location
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="text"
              name="eventLocation"
              id="eventLocation"
              {...register("eventLocation", {
                required: true,
              })}
            />
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventStart"
            >
              Start Date and Time
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="datetime-local"
              name="eventStart"
              id="eventStart"
              {...register("eventStart", {
                required: true,
              })}
            />
            {errors?.eventStart?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventEnd"
            >
              End Date and Time
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="datetime-local"
              name="eventEnd"
              id="eventEnd"
              {...register("eventEnd", {
                required: true,
              })}
            />
            {errors?.eventEnd?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="volunteersRequired"
            >
              Volunteers Required
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="number"
              name="volunteersRequired"
              id="volunteersRequired"
              {...register("volunteersRequired", {
                required: true,
              })}
            />
            {errors?.volunteersRequired?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="eventStatus"
            >
              Event Status
            </label>
            <select {...register("eventStatus")}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
            {errors?.eventStatus?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <button
            css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
            type="submit"
            name="submitEvent"
            id="submitEvent"
            description="submitEvent"
          >
            Publish Event
          </button>
        </div>
      </form>
    </div>
  );
}
