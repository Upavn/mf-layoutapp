import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="bg-green-500 p-5 text-white text-3xl ">
      <Link to="/" className="mr-4">Header</Link>
      <button
        className={
          props?.isLogin
            ? "bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
            : "bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        }
        onClick={() => props.onLogin(!props?.isLogin)}
      >
        {props?.isLogin ? "Log out" : "Log In"}
      </button>
      <Link
        to="/cart"
        className="ml-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded"
      >
        Cart
      </Link>
    </div>
  );
}
