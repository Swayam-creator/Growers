import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/product-1.avif",
    name: "Product Name",
  },
  {
    id: 2,
    image: "/product-2.avif",
    name: "Product Name",
  },
  {
    id: 3,
    image: "/product-3.avif",
    name: "Product Name",
  },
];

const Products = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + products.length) % products.length);
  const next = () => setIndex((index + 1) % products.length);

  return (
    <section className="w-full py-20 flex flex-col items-center">

      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-6 mb-2">
           <img src="/image.avif"  className="w-20" alt="line" loading="lazy" />
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest">
            OUR PRODUCT
          </h2>
          <img src="/image.avif" className="w-20"  alt="line" loading="lazy" />

        </div>
        <p className="text-sm tracking-widest text-gray-500 cursor-pointer">
          VIEW ALL
        </p>
      </div>

      <div className="relative w-full max-w-6xl flex items-center justify-center">

        <button
          onClick={prev}
          className="absolute left-0 md:-left-12 text-3xl text-purple-500"
        >
          ‹
        </button>

        <div className="flex items-center gap-8">

          <img
            src={products[(index - 1 + products.length) % products.length].image}
            className="hidden md:block w-44 h-56 object-cover rounded-xl opacity-60 scale-90"
            loading="lazy"
          />

          <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={products[index].image}
              alt="product"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-serif mb-3">
                {products[index].name}
              </h3>

              <div className="flex gap-4 text-xl">
                <span className="text-red-500">♥</span>
                <span className="text-cyan-400">⟳</span>
                <span className="text-purple-500">➤</span>
              </div>
            </div>
          </div>

          <img
            src={products[(index + 1) % products.length].image}
            className="hidden md:block w-44 h-56 object-cover rounded-xl opacity-60 scale-90"
            loading="lazy"
          />
        </div>

        <button
          onClick={next}
          className="absolute right-0 md:-right-12 text-3xl text-purple-500"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Products;
