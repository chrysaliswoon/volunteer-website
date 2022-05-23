import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = registerFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Register() {
  let navigate = useNavigate();

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signupState);
    createAccount();
  };

  //? Signup API Integration
  const createAccount = async () => {
    const URL = "http://localhost:3300/api/register";
    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerFields),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User created successfully : ", data);
        console.log(response.status);

        navigate("/");
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
