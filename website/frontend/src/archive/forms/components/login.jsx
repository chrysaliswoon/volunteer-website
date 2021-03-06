import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../constants/formFields";
import Input from "./input";
import FormAction from "./formAction";
import FormExtra from "./formExtra";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  let navigate = useNavigate();

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  // console.log(loginFields)
  // console.log(fields)

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //? Login API Integration
  const authenticateUser = async () => {
    const URL = "http://localhost:3300/api/login";
    fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFields),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successful login: ", data);
        console.log(response.status)
        navigate("/");
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
