import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function ProfileDetails() {
  // let { id } = useParams();
  // const [Profile, setProfile] = useState([]);

  // useEffect(() => {
  //   const URL = `http://localhost:3300/api/profile/${id}`;
  //   return () => {
  //     fetch(URL, {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProfile(data);
  //       })
  //       .catch((error) => console.log("Error:", error));
  //   };
  // });

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>{" "}
            Email Address appears here
          </p>

          <p className="pt-8 text-sm">Bio appears here</p>

          <div className="pt-12 pb-8">
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img
          src="https://source.unsplash.com/MP0IUfwrn0A"
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>

    </div>
  );
}
