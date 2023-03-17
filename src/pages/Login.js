import React from "react";

const Login = () => {
  return (
    <section className="max-h-screen">
      <div>
        <h1>Login</h1>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
