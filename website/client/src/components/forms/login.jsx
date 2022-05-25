import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const URL = "http://localhost:3300/api/login";
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
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
<div class="flex justify-center min-h-screen">  
<div class="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3">
<div class="text-center my-6">
      <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
      <p class="text-gray-500">Sign in to access your account</p>
    </div>
      <form class="mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full max-w-xs py-5 m-6">
          <label
          className="uppercase tracking-wide text-black text-xs font-bold mb-2"
          htmlFor="email"
          >
            Email
          </label>
          <input
          className="input input-bordered max-w-xs w-full px-3 py-2"
          type="email"
            name="email"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
        </div>
        <div className="w-full max-w-xs py-5 m-6">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
          className="input input-bordered max-w-xs w-full px-3 py-2"
          type="password"
            name="password"
            id="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <p>This field is required</p>
          )}
        </div>
        <button
          className="btn btn-outline btn-primary max-w-xs py-5 m-6"
          type="submit"
          name="submit"
          id="submit"
          description="Submit"
        >
          Submit
        </button>
        <p class="text-sm text-center text-gray-400 ">
          Don&#x27;t have an account yet? 
          <a href="#!" class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Sign up </a>.
        </p>
      </form>
    </div>
    </div>
  );
}
