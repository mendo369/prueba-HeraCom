import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ListOfPlans from "../Plans/ListOfPlans";
import Plan from "../Plans/Plan";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel({ items }) {
  return (
    <section className="plans">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide>
            <Plan key={item.Name} plan={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
