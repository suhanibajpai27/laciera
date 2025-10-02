// Catalog.jsx
import React from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";

const products = [
  {
    id: "subsidies",
    category: "solar energy",
    title: "Subsidies And Tax Benefits",
    image: p1,
  },
  {
    id: "asset-management",
    category: "solar energy",
    title: "Asset Management Web Portal",
    image: p2,
  },
  {
    id: "ems",
    category: "solar energy",
    title: "EMS Web Portal",
    image: p3,
  },
];

const Catalog = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <a
            key={product.id}
            href={`#${product.id}`} // link to product section
            className="group relative block rounded-sm overflow-hidden shadow-md"
          >
            {/* Background Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* White Overlay Box (Bottom) */}
            <div className="absolute bottom-10 left-5 right-5 bg-white  py-3 flex items-center p-0 m-0">
  {/* Green Line */}
  <div className="w-1 bg-green-600 h-12 mr-3  "></div>

  {/* Text */}
  <div className=" text-left">
    <p className="text-[16px] text-primary-2 font-medium">{product.category}</p>
    <h3 className="text-[20px] font-bold text-text-1">{product.title}</h3>
  </div>
</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
