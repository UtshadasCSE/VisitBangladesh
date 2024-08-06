import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./story.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Story = () => {
  const { isLoading, data: places = [] } = useQuery({
    queryKey: ["places"],
    queryFn: async () => {
      const res = axios.get("https://visitbangladesh.onrender.com/divisions", {
        // withCredentials: true,
      });
      return (await res).data;
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

  return (
    <div className="container max-sm:w-4/5 mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {places.map((place) => (
          <SwiperSlide key={place._id} className="flex flex-col">
            <img src={place.imageURL} className="h-full" />
            <Link
              to={`/divisions/${place.name}`}
              className="font-playwrite font-semibold text-lg text-center py-2 btn w-full border-t-0 hover:bg-[#d74a49] duration-700 hover:text-white"
            >
              {place.name}
              <FaArrowRight />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;
