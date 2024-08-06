import { CiLocationArrow1 } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomeBlogs = () => {
  const [showmore, setShowMore] = useState(3);
  const { isLoading, data: news = [] } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/news");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <>
        <div className="flex justify-center py-4">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }
  // date from db as a dd mmm yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
  };
  const formattedDate = formatDate(news[0]?.publishDate);
  // show more btn set function
  const handleShowMore = () => {
    setShowMore(news.length);
  };
  return (
    <div>
      <section className="container mx-auto font-popins">
        <div className=" p-6  space-y-6 sm:space-y-12">
          <Link
            to={`/news/${news[0]?._id}`}
            rel="noopener noreferrer"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 hover:shadow-xl"
          >
            <img
              src={news[0]?.Thumbnail}
              alt=""
              className="object-fit w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {news[0]?.newsTitle}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {/* {format(new Date(dateString), "d MMM yyyy")} */}
                {formattedDate}
              </span>
              <p>{news[0]?.Description.slice(0, 150)}........</p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, showmore).map((singleNews) => (
              <Link
                to={`/news/${singleNews._id}`}
                key={singleNews._id}
                rel="noopener noreferrer"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hover:shadow-lg transition"
              >
                <img
                  role="presentation"
                  className="object-fit w-full rounded h-44 dark:bg-gray-500"
                  src={singleNews.Thumbnail}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {singleNews.newsTitle}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    {formatDate(singleNews.publishDate)}
                  </span>
                  <p>{singleNews.Description.slice(0, 100)}.......</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <div className={showmore === news.length ? "hidden" : ""}>
              <button
                onClick={handleShowMore}
                type="button"
                className="px-6 py-3 flex items-center gap-2 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
              >
                See more posts
                <CiLocationArrow1 />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlogs;
