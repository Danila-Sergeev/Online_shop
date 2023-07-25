import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import data from "../../utils/data";
import "../../../node_modules/swiper/swiper-bundle.min.css";

import sliderStyles from "./Slider.module.css";
export default function Slider() {
  return (
    <div>
      <Swiper
        className={sliderStyles.pagination}
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((obj) => {
          if (obj.id <= 3) {
            return (
              <SwiperSlide key={obj.id}>
                <div className={sliderStyles.box}>
                  <img
                    className={sliderStyles.img}
                    src={obj.image}
                    alt={obj.name}
                  ></img>{" "}
                  <div className={sliderStyles.titleBox}>
                    <h2 className={sliderStyles.title}>ELEVATE YOUR WARDOBE</h2>
                    <h4 className={sliderStyles.subtitle}>
                      Shop Our Trendy Fasion
                    </h4>
                    <button className={sliderStyles.button}>
                      Go To Catalog
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
