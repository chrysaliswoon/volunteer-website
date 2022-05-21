import e from "express";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     name: user.name,
  //     email: user.email,
  //     password: user.password,
  //   };
  //   axios
  //     .post("http://localhost:3000/api/register", userData)
  //     .then((response) => {
  //       console.log(response)
  //       // console.log(response.status);
  //       // console.log(response.data.token);
  //     });
  // };

  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input {...register("name")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input {...register("confirmPassword")} type="password" />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
