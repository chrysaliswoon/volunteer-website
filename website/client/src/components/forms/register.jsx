import React from "react";
import Button from "../button/button";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    // handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // }; // your form submit function which will invoke after successful validation

  // console.log(watch("example")); // you can watch individual input by pass the name of the input
  return (
    <form
      onSubmit=""
      className="w-full mx-auto bg-gray-900 p-8 px-8 rounded-1g"
      id="login"
      method="get"
    >
      <h2 className="text-4xl text-white font-bold text-center">REGISTER</h2>
      <div className="flex flex-col text-gray-400 py-2">
        <UserCircleIcon className="h-5 w-5 text-gray-500" />
        <input
          className="rounded-1g bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:gray-800 focus:outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          {...register("name", {
            required: true,
          })}
        ></input>
      </div>
      <div className="flex flex-col text-gray-400 py-2">
        <UserCircleIcon className="h-5 w-5 text-gray-500" />
        <input
          className="rounded-1g bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:gray-800 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          {...register("email", {
            required: true,
          })}
        ></input>
      </div>
      <div className="flex flex-col text-gray-400 py-2">
        <LockClosedIcon className="h-5 w-5 text-gray-500" />
        <input
          className="rounded-1g bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:gray-800 focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        ></input>
      </div>
      <div className="flex flex-col text-gray-400 py-2">
        <LockClosedIcon className="h-5 w-5 text-gray-500" />
        <input
          className="rounded-1g bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:gray-800 focus:outline-none"
          type="password"
          name="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: true,
          })}
        ></input>
      </div>
      <Button
        css="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50"
        type="submit"
        name="signIn"
        id="signIn"
        description="Sign In"
      />
      <nav>
        <Link to="/login" className="flex flex-col text-gray-400 py-2">
          Registered? Login here
        </Link>
      </nav>
    </form>
  );
}
