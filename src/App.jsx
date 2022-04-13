import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

import "./index.scss";

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <Header name={{ first: "Phuong" }} />
    <div className="py-5">This is a content</div>
    <ProductDetail />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
