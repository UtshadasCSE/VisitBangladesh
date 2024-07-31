import { RiHome6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-[#e12729] text-[#72b043]">
      <div className=" flex  justify-center items-center gap-2 font-popins ">
        <h2 className="text-5xl font-black">404|</h2>
        <p className="text-lg tracking-[0.3rem]">Page not found</p>
      </div>
      <div>
        <Link
          to={"/"}
          className="btn bg-[#007f4e] text-[#f8cc1b] font-semibold font-popins"
        >
          <RiHome6Fill />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
