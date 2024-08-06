// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./imageslider.css";
// import required modules
import { Pagination } from "swiper/modules";

const ImageSlider = ({ places }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {places.placesImages?.map((place) => (
          <SwiperSlide key={place}>
            <img src={place} alt="Places photo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
