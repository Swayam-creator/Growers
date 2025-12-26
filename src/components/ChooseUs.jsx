const ChooseUs = () => {
  return (
    <section
      className="
        relative w-full mt-20
        min-h-[60vh]
        sm:min-h-[70vh]
        lg:min-h-[85vh]
        flex items-center justify-center
        overflow-hidden
        bg-black
      "
    >
 
      <img
        src="/choose.avif"
        alt="why choose us"
        loading="lazy"
        className="
          absolute inset-0
          w-full h-full
          object-contain
          sm:object-cover
          object-center
        "
      />

      <div className="absolute inset-0 bg-black/40" />

      <div
        className="
          relative z-10
          max-w-3xl
          px-6 sm:px-8 md:px-12
          flex flex-col
          items-center
          text-center
        "
      >
        <h2 className="font-serif text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Why Choose Us
        </h2>

        <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">
          We believe great work is never rushed. Every piece we create is shaped
          by patience, precision, and a deep respect for craftsmanship. From the
          materials we select to the details we refine, quality is never an
          afterthought — it is the foundation.
        </p>
      </div>
    </section>
  );
};

export default ChooseUs;
