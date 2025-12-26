const logos = [
  "/cnbc.avif",
  "/bbc.avif",
  "/new-york-time.avif",
  "/new-2.avif",
  "./news.avif",
  "./news.avif",
];

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-12 mt-6">


      <div className="relative max-w-md mx-auto md:max-w-6xl">
        <img
          src="/hero.avif"
          alt="hero"
          loading="lazy"
          fetchPriority="high"
          className="w-full h-[260px] sm:h-[300px] md:h-[380px] object-cover rounded-2xl shadow-lg"
        />

      
        <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-black/50 backdrop-blur text-white rounded-xl px-4 py-3 text-center border border-purple-500 shadow-md">
            <p className="text-lg md:text-xl font-bold">650k</p>
            <p className="text-xs mb-3">Subscribers</p>
            <p className="text-lg md:text-xl font-bold">5000</p>
            <p className="text-xs">Post</p>
          </div>
        </div>
      </div>

      <div
        className="
          max-w-md mx-auto md:max-w-6xl
          mt-6
          flex flex-col md:flex-row
          items-center md:items-center
          justify-between
          gap-6
        "
      >

        <div className="flex justify-center md:justify-start">
          <img src="/rating.avif" alt="rating" className="w-14 md:w-16" loading="lazy" />
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-3xl md:text-5xl font-serif">
            Business Name
          </h1>

          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-medium">
              Subscribe
            </button>
            <button className="px-5 py-2 rounded-full border text-sm text-gray-600">
              Message
            </button>
          </div>
        </div>

        <div className="w-full md:w-[320px] bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-xl p-4 shadow-lg">
          <p className="text-sm font-semibold">Reach us</p>
          <p className="text-xs opacity-80 mb-3">Let’s connect and talk</p>
          <img src="/contact.avif" alt="contact" className="w-24" loading="lazy" />
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden">

        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex w-max gap-10 opacity-80 hover:[animation-play-state:paused]"
          style={{ animation: "logo-scroll 18s linear infinite" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="media-logo"
              className="h-5 sm:h-6"
              loading="lazy"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
