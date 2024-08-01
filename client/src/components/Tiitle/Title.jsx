const Title = ({ heading, subHeading }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="container max-sm:w-4/5 mx-auto max-sm:text-center"
    >
      <div className="flex flex-col items-center justify-center py-6 font-popins">
        <h2 className="text-3xl font-semibold py-6 tracking-[0.3rem]">
          {heading}
        </h2>
        <p className="font-medium text-lg text-center">{subHeading}</p>
      </div>
    </div>
  );
};

export default Title;
