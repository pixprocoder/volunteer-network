import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Register = () => {
  return (
    <section className="max-h-screen">
      <div className="w-1/2 mx-auto">
        <h1 className=" text-5xl font-bold my-4">Register As a Volunteer</h1>
        <div class="">
          <input
            type="text"
            name="text-xl"
            placeholder="Full Name"
            class="w-full my-2 bg-white border-b-2 border-gray-300 focus:border-b-2 focus:border-b-indigo-500   outline-none text-blue-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="text"
            name="text-xl"
            placeholder="Username or Email"
            class="w-full my-2 bg-white border-b-2 border-gray-300 focus:border-b-2 focus:border-b-indigo-500   outline-none text-blue-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="text"
            name="text-xl"
            placeholder="Date"
            class="w-full my-2 bg-white border-b-2 border-gray-300 focus:border-b-2 focus:border-b-indigo-500   outline-none text-blue-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="text"
            name="text-xl"
            placeholder="Description"
            class="w-full my-2 bg-white border-b-2 border-gray-300 focus:border-b-2 focus:border-b-indigo-500   outline-none text-blue-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="text"
            name="text-xl"
            placeholder="Organize books at the library."
            class="w-full my-2 bg-white border-b-2 border-gray-300 focus:border-b-2 focus:border-b-indigo-500   outline-none text-blue-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="submit"
            id="submit"
            name="text-xl"
            placeholder="Organize books at the library."
            class="w-full bg-blue-500 rounded p-4 text-xl font-bold text-white hover:bg-blue-700 cursor-pointer"
          />
          <p className="mt-4">
            Already have an Account?
            <Link className="text-blue-500 " to={"/login"}>
              {" "}
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
