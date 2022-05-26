import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LoginForm() {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");


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
        // console.log("Success", data);
        setToken(data.accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3">
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
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
            {errors?.email?.type === "required" && (
              <p>This field is required</p>
            )}
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
          <p className="text-sm text-center text-gray-400 ">
            Don&#x27;t have an account yet?
            <Link
              to="/register"
              className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
            > Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
