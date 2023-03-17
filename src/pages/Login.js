import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className=" mt-32">
      <div className="w-1/2 mx-auto p-5 border  ">
        <h1 className="text-4xl  my-4 text-center">Login</h1>
        <p className="border font-semibold border-blue-500 hover:border-blue-700 cursor-pointer text-2xl p-4 w-3/4 mx-auto rounded-lg text-center my-4 ">
          Continue with google
        </p>
        <p className="text-center my-4">
          Don't have an account ?
          <Link className="text-blue-500" to={"/register"}>
            {" "}
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
