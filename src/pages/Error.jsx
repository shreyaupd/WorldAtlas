import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Error = () => {
  const err = useRouteError(); 
  console.log(err);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-500">
      <div className="error-heading text-8xl mb-3 font-bold text-white">
        Oops! an error occured
      </div>
      <div className="">
        {err && <p className="!mb-10">{err.data}</p>}
        <Link
          to="/"
          className="flex items-center justify-center gap-3 bg-white text-black !p-4 rounded-4xl font-semibold hover:bg-gray-200 transition"
        >
          Go To Home
          <FaArrowRight className="text-black" />
        </Link>
      </div>
    </div>
  );
};

export default Error;
