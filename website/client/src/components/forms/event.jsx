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
        navigate("/events");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register("eventTitle", {
            required: true,
          })}
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
            {...register("eventStart", {
              required: true,
            })}
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
            {...register("eventEnd", {
              required: true,
            })}
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
          {...register("eventLocation", {
            required: true,
          })}
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
          {...register("volunteersRequired", {
            required: true,
          })}
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
          {...register("eventDescription", {
            required: true,
          })}
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
        {errors?.eventStatus?.type === "required" && (
          <p>This field is required</p>
        )}
      </div>
      <div className="w-full max-w-xs py-5">
        <button
          className="btn btn-outline btn-primary"
          type="submit"
          name="submitEvent"
          id="submitEvent"
          description="submitEvent"
        >
          Publish Event
        </button>
      </div>
    </form>
  );
}
