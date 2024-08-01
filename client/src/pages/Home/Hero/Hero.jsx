const Hero = () => {
  return (
    <div>
      <div className="relative bg-heroBg h-screen  bg-cover bg-center bg-no-repeat font-popins">
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="relative z-10 text-white p-6 flex flex-col justify-center items-center gap-6 h-full">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-xl font-bold tracking-[0.4rem]"
          >
            PRESENTING
          </h1>
          <p
            data-aos="zoom-out-left"
            className="mt-2 text-7xl max-sm:text-xl max-sm:text-center max-sm:leading-10 text-[#e12729] tracking-[1rem]  font-playwrite font-bold"
          >
            MADE IN BANGLADESH
          </p>
          <p className="absolute bottom-8 text-lg max-sm:text-center max-sm:text-sm tracking-[0.3rem]">
            This encapsulates the essence of the country’s natural beauty and
            rich cultural heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
