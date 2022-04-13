import React from "react";
import { Link } from "react-router-dom";

export default function Product({ products, onAddCart, cartItems, isLogin }) {
  console.log("a", cartItems);
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {products?.map((x, i) => {
          return (
            <div className="my-4" key={i}>
              <Link to={`/product/${x?.id}`}>
                <img
                  className="w-full h-64"
                  src={x?.image}
                  alt="Sunset in the mountains"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{x?.name}</div>
                <p className="text-gray-700 text-base">{x?.description}</p>
              </div>
              <p className="px-6">
                <strong>Quantity:</strong> {x?.quantity}
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
              <div className="px-6">
                <button
                  onClick={() => onAddCart(x?.id)}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {isLogin && cartItems?.includes(x?.id)
                    ? "Remove from cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
