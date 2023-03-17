import React from "react";
import Categories from "./Categories";

const Home = () => {
  return (
    <section className="my-20">
      <h1 className="text-center text-[36px] font-bold my-4">
        I GROW BY HELPING PEOPLE IN NEED.
      </h1>
      <div className="flex  w-1/2 mx-auto justify-center items-center">
        <input
          type="text"
          className=" w-1/2 border outline-none text-xl rounded-r-none border-r-0 rounded-lg p-3"
          placeholder="Search"
        />
        <button className="bg-[#3F90FC] text-white text-xl font-semibold py-3 px-4 rounded-l-none rounded-lg">
          Search
        </button>
      </div>

      <Categories></Categories>
    </section>
  );
};

export default Home;
