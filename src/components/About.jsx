const AboutCompany = () => {
  return (
    <section className="w-full px-4 md:px-12 mt-20">

   
      <div className="relative max-w-md mx-auto md:max-w-6xl group">


        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/about-2.webp"
            alt="craft process"
            loading="lazy"
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

    
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-black/60
              opacity-0
              transition-opacity duration-300
              group-hover:[.small-hover]:opacity-50
            "
          />
        </div>

  
        <div
          className="
            absolute -bottom-16 left-4 md:left-12
            small-hover
            rounded-2xl overflow-hidden
          "
        >
          <div className="relative">
            <img
              src="/about-sm.webp"
              alt="handcrafted detail"
              loading="lazy"
              className="w-[220px] md:w-[320px] object-cover rounded-2xl border-2 border-purple-500 shadow-lg"
            />

          
            <div
              className="
                absolute inset-0
                bg-black/60
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />
          </div>
        </div>
      </div>

     
      <div
        className="
          max-w-md mx-auto md:max-w-6xl
          mt-24 md:mt-16
          flex flex-col md:flex-row
          items-start
          justify-between
          gap-10
        "
      >
  
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            About Company
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We are a craft-driven studio built on patience, precision, and purpose.
            Every piece we create begins as a quiet idea and evolves through skilled
            hands, thoughtful design, and an uncompromising respect for detail.
            <br /><br />
            Rooted in tradition yet shaped by modern aesthetics, our work celebrates
            the beauty of slow craftsmanship in a fast-moving world. We believe
            meaningful objects tell stories — of makers, materials, and moments —
            and our mission is to bring those stories into everyday living.
          </p>
        </div>

        <div className="w-full md:w-auto flex md:items-end">
          <button className="px-6 py-3 border border-gray-400 rounded-md text-sm tracking-widest hover:bg-black hover:text-white transition">
            WE’RE HIRING
          </button>
        </div>
      </div>

    </section>
  );
};

export default AboutCompany;
