const Navbar = () => {
  return (
    <nav className="w-full px-4 py-3 md:px-8 md:py-4">
      <div className="flex items-center">
        <div className="w-20 border sm:w-12 md:w-40 py-3.5 mx-4 my-5 rounded-2xl">
          <img
            src="/logo.avif"
            alt="company logo"
            className="w-full h-auto object-contain mix-blend-darken"
            loading="lazy"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
