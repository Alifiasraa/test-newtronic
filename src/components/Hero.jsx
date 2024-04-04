const Hero = ({ title, description }) => {
  return (
    <div className="relative bg-top bg-[url('./images/hero.jpeg')] bg-cover w-full h-72 md:h-3/4 md:bg-center">
      <div className="absolute inset-0 bg-slate-950 opacity-30 h-full md:h-32"></div>
      <div className=" text-white relative z-10 mx-3 pt-5 md:flex md:justify-between">
        <div className="md:flex md:items-center">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 md:mr-4">
            {/* Education <br /> Newtronic */}
            {title}
          </h1>
        </div>
        <div className="md:flex md:items-center">
          <h3 className="text-lg md:text-right">
            {/* Aplikasi dalam bidang pendidikan <br /> yang dikembangkan oleh
            perusahaan newtronic */}
            {description}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
