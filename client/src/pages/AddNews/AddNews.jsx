import { useState } from "react";
import { useForm } from "react-hook-form";

import { CiBookmarkPlus } from "react-icons/ci";
import { MdViewHeadline } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";

import { IoAddCircleOutline } from "react-icons/io5";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import useAuth from "./../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const AddNews = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const {
    reset,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newsData = {
      newsTitle: data.newsTitle,
      Thumbnail: data.thumbnail,
      Category: data.category,
      Description: data.description,
      publishDate: startDate,
      author: {
        name: user?.displayName,
        email: user?.email,
        profile: user?.photoURL,
      },
    };
    reset();
    axios
      .post("https://visitbangladesh.onrender.com/news", newsData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Successfully added!");
        }
      });
  };
  return (
    <div className="container mx-auto max-sm:w-4/5 font-popins">
      <div className="py-36">
        <div className="lg:w-3/4 mx-auto bg-[#d74a49] p-7 flex flex-col justify-center items-center gap-3 rounded-md shadow-lg">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-playwrite font-black text-2xl text-[#007f4e] flex gap-2 items-center border-b-4 border-b-[#007f4e]">
              Add News
              <CiBookmarkPlus />
            </h2>
            <p className="text-white">
              we go beyond just showcasing the beauty and history of Bangladesh.
              We provide a dynamic platform where you can stay updated and
              engaged with the latest happenings and insights about this
              incredible country.
            </p>
          </div>
          <div className="bg-[#007f4e] p-5 w-full rounded-md translate-y-16">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex max-sm:flex-col gap-3 w-full">
                <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
                  <MdViewHeadline />
                  <input
                    {...register("newsTitle", { required: true })}
                    type="text"
                    className="grow"
                    placeholder="Your news headline"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
                  <FaImage />
                  <input
                    {...register("thumbnail", { required: true })}
                    type="text"
                    className="grow"
                    placeholder="News thumbnail URL"
                  />
                </label>
              </div>
              {errors.newsTitle && (
                <span className="text-error">This field is required!</span>
              )}
              {errors.thumbnail && (
                <span className="text-error">This field is required!</span>
              )}
              <div className="flex max-sm:flex-col gap-3 w-full">
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered lg:w-1/2"
                >
                  <option disabled selected>
                    Select your Category
                  </option>
                  <option value={"politics"}>Politics</option>
                  <option value={"international"}>International</option>
                  <option value={"sports"}>Sports</option>
                  <option value={"business"}>Business</option>
                  <option value={"education"}>Education</option>
                  <option value={"entertainment"}>Entertainment</option>
                  <option value={"history"}>History</option>
                  <option value={"lifestyle"}>Lifestyle</option>
                </select>
                <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
                  <FaCalendarDays />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>
              </div>
              {errors.category && <span>This field is required!</span>}

              <div>
                <textarea
                  {...register("description", { required: true })}
                  className="textarea textarea-bordered w-full"
                  placeholder="Write description here"
                ></textarea>
              </div>
              {errors.description && (
                <span className="text-error">This field is required!</span>
              )}
              <div>
                <button className="btn btn-outline border-[#d74a49] text-white  w-full hover:bg-[#d74a49] hover:text-[#007f4e]">
                  Add News
                  <IoAddCircleOutline className="text-xl to-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AddNews;
