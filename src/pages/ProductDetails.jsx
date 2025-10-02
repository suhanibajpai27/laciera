import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import Details from "../components/productdetails/Details";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  return (
    <>
      <Navbar />
      <Banner heading={product.title} description={product.description} />
      <Details product={product} />
      <Footer />
    </>
  );
}

export default ProductDetails;
