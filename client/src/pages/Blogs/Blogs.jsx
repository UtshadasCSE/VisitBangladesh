/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
  const { isLoading, data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("https://visitbangladesh.onrender.com/blogs");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <>
        <div className="h-screen flex justify-center py-4">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="container max-sm:w-4/5 mx-auto py-28 font-popins">
        <div className="relative bg-banglaBG bg-center bg-cover bg-no-repeat lg:p-20 max-sm:text-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="relative z-10 text-white p-4 flex flex-col justify-center items-center gap-3">
            <h1 className="text-2xl font-bold font-playwrite border-b-8">
              All Blogs
            </h1>
            <p className="lg:w-3/4 mx-auto">
              Bangladesh, officially known as the People’s Republic of
              Bangladesh, is a vibrant country located in South Asia. It is
              bordered by India on three sides and Myanmar to the southeast,
              with the Bay of Bengal to the south1. Despite its relatively small
              size, Bangladesh is the eighth-most populous country in the world,
              with a population of approximately 168 million people2.
            </p>
          </div>
        </div>
        <div>
          <div className="py-3">
            <div className="flex flex-1 items-center justify-center p-6">
              <div className="w-full max-w-lg">
                <form className="mt-5 sm:flex sm:items-center">
                  <input
                    id="q"
                    name="q"
                    className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search something here"
                    type="text"
                  />
                  <button
                    type="submit"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[] px-4 py-2 font-medium bg-[#d74a49] text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                href="#"
              >
                <img
                  src={blog.Thumbnail}
                  className="shadow rounded-lg overflow-hidden border h-52 w-full"
                />
                <div className="mt-8">
                  <h4 className="font-bold text-xl font-playwrite">
                    {blog.blogTitle}
                  </h4>
                  <p className="mt-2 text-gray-600">
                    {blog.Description.slice(0, 80)}.......
                  </p>
                  <div className="mt-5">
                    <button
                      type="button"
                      className=" flex gap-2 items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                    >
                      View Details
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
