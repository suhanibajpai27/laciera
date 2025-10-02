import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/Products";

const Details = ({ product }) => {
  const prevProduct = products.find((p) => p.id === product.prevId);
  const nextProduct = products.find((p) => p.id === product.nextId);

  return (
    <section className="bg-white text-black py-12 px-6 lg:px-20">
      {/* Main Image + Project Info */}
      <div className="relative  mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contain "
        />

        <div className="absolute -bottom-15 right-4 bg-white shadow-sm  p-4 w-64 text-left">
          <h3 className="text-text-1 font-semibold mb-3 text-[22opx]">Project Info:</h3>
          {product.projectInfo.map((info, idx) => (
            <div
              key={idx}
              className="flex  justify-between text-[16px] text-text-1  mb-2 "
            >
              <span>{info.label}</span>
              <span className="font-semibold">{info.value}</span>
              
            </div>
          
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="w-full text-left mt-8 px-6">
        <h3 className="text-[30px] font-semibold text-text-1 mt-1 mb-2">
          Product Information
        </h3>
        <p className="text-text-2 text-[16px] leading-relaxed">{product.description}</p>
      </div>

      {/* Scope */}
      <div className="w-full text-left mt-10 px-6">
        <h3 className="text-[30px] font-semibold text-text-1 mb-2">
          Scope Of Product
        </h3>
        <p className="text-text-2 text-[16px] leading-relaxed mb-6">{product.scope.heading}</p>
        <div className="grid md:grid-cols-3 gap-8 mt-3">
          {product.scope.points.map((point, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="font-semibold text-text-1 text-[20px]">
                  {point.title}
                </span>
              </div>
              <p className="text-text-2 text-[14px] leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="w-full text-left mt-10 px-6">
        <h3 className="text-[30px] font-semibold text-text-1 mb-2">
          The Result Of Product
        </h3>
        <p className="text-text-2 text-[16px] leading-relaxed mb-6">
          {product.result.description}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {product.result.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.title} result ${idx}`}
              className="w-full h-64 object-cover "
            />
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="w-full mx-auto mt-10 px-6 flex items-center justify-between ">
        {prevProduct && (
          <Link
            to={`/product-details/${prevProduct.id}`}
            className="flex items-center gap-2"
          >
            <img
              src={prevProduct.image}
              alt={prevProduct.title}
              className="w-14 h-14 rounded-full"
            />
            <div className="text-left">
           <div className="text-text-1 font-semibold text-[22px]"> Previous:</div>
           <div className="text-text-2  text-[16px]"> {prevProduct.title}</div>
            </div>
           
          </Link>
        )}
        {nextProduct && (
          <Link
            to={`/product-details/${nextProduct.id}`}
            className="flex items-center gap-2"
          >
              <div className="text-right">
           <div className="text-text-1 font-semibold text-[22px]"> Next: </div>
           <div className="text-text-2  text-[16px]"> {nextProduct.title}</div>
            </div>
            
            <img
              src={nextProduct.image}
              alt={nextProduct.title}
              className="w-14 h-14 rounded-full"
            />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Details;
