const galleryItems = [
  {
    id: 1,
    image: "/gallery-1.avif",
    likes: 26,
    comments: 3,
  },
  {
    id: 2,
    image: "/gallery-2.avif",
    likes: 26,
    comments: 3,
  },
];

const OurGallery = () => {
  return (
    <section className="w-full py-20 px-4 md:px-12">

      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-6 mb-2">
          <span className="w-10 h-px bg-gray-400" />
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest">
            OUR GALLERY
          </h2>
          <span className="w-10 h-px bg-gray-400" />
        </div>
        <p className="text-xs tracking-widest text-gray-500 cursor-pointer">
          VIEW ALL
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={item.image}
              alt="gallery item"
              loading="lazy"
              className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-4 left-4 flex items-center gap-3 text-white z-10">
              <img
                src="/profile.jpg"
                alt="profile"
                loading="lazy"
                className="w-9 h-9 rounded-full border border-white"
              />
              <div className="text-xs leading-tight">
                <p className="font-semibold">MYMUS</p>
                <p className="opacity-80">@mymus_off</p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white text-sm z-10">

              <div className="flex gap-4">
                <span className="flex items-center gap-1">❤️ {item.likes}</span>
                <span className="flex items-center gap-1">💬 {item.comments}</span>
                <span>➤</span>
              </div>

              <p className="text-xs text-gray-200 max-w-[160px] text-right">
                Serving everyone out there
              </p>
            </div>

          </div>
        ))}

      </div>

   
     

    </section>
  );
};

export default OurGallery;
