const Hero = ({ title, description, banner }) => {
  return (
    <div
      className={`relative h-72 w-full bg-cover bg-top md:h-96 md:bg-center`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 h-full bg-slate-950 opacity-30 md:h-32"></div>
      <div className="relative z-10 mx-6 pt-5 text-center text-white md:flex md:items-center md:justify-between xl:top-2 ">
        <h1 className="text-4xl font-bold md:w-1/3 md:text-left xl:text-5xl">
          {title}
        </h1>
        <h3 className="text-lg font-semibold italic md:w-2/5 md:text-right xl:w-1/3 xl:text-2xl ">
          {description}
        </h3>
      </div>
      <div className="mt-3 flex justify-center md:hidden">
        <button className="z-10  mt-4 block w-1/2 rounded-3xl bg-white px-4 py-1 font-semibold text-[#67568c]">
          Mulai Belajar
        </button>
      </div>
    </div>
  );
};

export default Hero;
