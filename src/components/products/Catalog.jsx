import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/Products";

const Catalog = () => {
  return (
    <section className="w-full py-10 md:py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product-details/${product.id}`}
            state={{ product }}
            className="group relative block rounded-sm overflow-hidden shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-10 left-5 right-5 bg-white py-3 flex items-center">
              <div className="w-1 bg-green-600 h-12 mr-3"></div>
              <div className="text-left">
                <p className="text-[14px] lg:text-[16px] text-primary-2 font-medium">
                  {product.category}
                </p>
                <h3 className="text-[16px] md:text-[16px] lg:text-[20px] font-bold text-text-1">
                  {product.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
