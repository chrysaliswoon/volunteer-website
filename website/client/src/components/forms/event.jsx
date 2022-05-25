import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const URL = "http://localhost:3300/api/register";
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
                name="title"
                id="title"
                {...register("title", {
                  required: true,
                })}
              />
              {errors?.title?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="description"
            >
              Event Description
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="text"
              name="description"
              id="description"
              {...register("description", {
                required: true,
              })}
            />
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="startDateTime"
            >
            Start Date and Time
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="datetime-local"
              name="startDateTime"
              id="startDateTime"
              {...register("startDateTime", {
                required: true,
              })}
            />
            {errors?.startDateTime?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="endDateTime"
            >
            End Date and Time
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="datetime-local"
              name="endDateTime"
              id="endDateTime"
              {...register("endDateTime", {
                required: true,
              })}
            />
            {errors?.endDateTime?.type === "required" && (
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
            {errors?.endDateTime?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <button
            css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
            type="submit"
            name="submitDraft"
            id="submitDraft"
            description="submitDraft"
          >
            Save as Draft
          </button>
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