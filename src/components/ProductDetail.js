import React from "react";

export default function ProductDetail({ isLogin, product, onAddCart, cartItems }) {
  return (
    <div style={{ margin: "30px auto", width: "40%" }}>
      <img
        className="w-full h-64"
        src={product?.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product?.name}</div>
        <p className="text-gray-700 text-base">{product?.description}</p>
      </div>
      <p className="px-6">
        <strong>Quantity:</strong> {product?.quantity}
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
          onClick={() => onAddCart(product?.id)}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isLogin && cartItems?.includes(product?.id)
            ? "Remove from cart"
            : "Add to cart"}{" "}
        </button>
      </div>
    </div>
  );
}
