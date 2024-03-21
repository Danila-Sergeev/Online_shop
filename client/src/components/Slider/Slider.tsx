import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "../../../node_modules/swiper/swiper-bundle.min.css";

import sliderStyles from "./Slider.module.css";
import { FC } from "react";
interface ISlider {
  cards: any;
}

const Slider: FC<ISlider> = ({ cards }) => {
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
        {cards.map((obj: any) => {
          if (obj.price <= 1500) {
            return (
              <SwiperSlide key={obj._id}>
                <div className={sliderStyles.box}>
                  <img
                    className={sliderStyles.img}
                    src={obj.image}
                    alt={obj.name}
                  ></img>
                  <div className={sliderStyles.titleBox}>
                    <h2 className={sliderStyles.title}>ELEVATE YOUR WARDOBE</h2>
                    <h4 className={sliderStyles.subtitle}>
                      Shop Our Trendy Fasion
                    </h4>
                    <NavLink to="/shop" className={sliderStyles.buttonLink}>
                      <button className={sliderStyles.button}>
                        Go To Catalog
                      </button>
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};
export default Slider;
