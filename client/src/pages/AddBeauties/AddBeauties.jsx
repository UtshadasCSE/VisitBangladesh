import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";

const AddBeauties = () => {
  return (
    <div className="relative h-screen flex justify-center items-center bg-mapBg bg-center bg-cover bg-no-repeat font-popins">
      <div className="absolute inset-0 bg-black opacity-75 backdrop-blur-xl"></div>
      <div className="relative z-10 text-white p-4">
        <div className="bg-[#d74a49] p-16 max-sm:p-8 rounded-xl shadow-xl w-3/5 mx-auto max-sm:w-4/5 ">
          <h1 className="text-2xl max-sm:text-sm text-[#007f4e] font-bold py-3 border-b-4 lg:w-max font-playwrite">
            What unique stories do you bring to the table?
          </h1>
          <div className="flex max-sm:flex-col justify-between gap-4 py-4">
            <div>
              <h2 className="text-lg font-semibold py-2">Blogs and Stories</h2>
              <p className="">
                Dive into our collection of blogs and stories written by
                travelers, locals, and experts. Whether you’re looking for
                travel tips, cultural insights, or personal experiences, our
                blog section has something for everyone.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold py-2">Current News</h2>
              <p className="">
                Dive into our collection of blogs and stories written by
                travelers, locals, and experts. Whether you’re looking for
                travel tips, cultural insights, or personal experiences, our
                blog section has something for everyone.
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col justify-between items-center gap-3 py-4 max-sm:w-max">
            <Link to={"/add-blogs"}>
              <Button value={"Add Blogs"} />
            </Link>
            <FaCirclePlus className="text-2xl text-[#007f4e]" />
            <Link to={"/add-news"}>
              <Button value={"What happenning"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBeauties;
