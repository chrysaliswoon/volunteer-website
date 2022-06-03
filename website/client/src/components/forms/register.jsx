import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function RegisterForm() {
  const success = "User created successfully!";
  const existingUser = "You have an existing account with us";
  const RegisterAlert = withReactContent(Swal);
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
        if (data.msg == existingUser) {
          RegisterAlert.fire({
            title: existingUser,
            footer: "",
          });
          navigate("/register");
        } else {
          RegisterAlert.fire({
            title: success,
            footer: "You may log in now!",
          });
          navigate("/login");
        }
        // console.log("Success", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Register</h1>
          <p className="text-gray-500">
            Join our community of fun and like-minded people!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-xs py-5 m-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="input input-bordered max-w-xs w-full px-3 py-2"
              type="text"
              name="name"
              id="name"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
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
            className="btn btn-outline btn-primary items-center w-full py-5 m-6"
            type="submit"
            name="submit"
            id="submit"
            description="Submit"
          >
            Submit
          </button>
        </form>
      </div>
  );
}
