import React from "react";

const Category = (props) => {
  console.log(props);
  const { title, img } = props.category;
  return (
    <section>
      <div className="relative">
        <p className="bg-green-500 rounded-b-lg text-center absolute bottom-0 w-full p-6 text-xl font-semibold text-white">
          {title}
        </p>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Category;
