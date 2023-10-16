import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Hero.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import useFetch from "../../hooks/useFetch";

const textVariants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function Hero() {
  SwiperCore.use([Pagination, Autoplay]);

  const { data, loading, error } = useFetch(`http://localhost:3000/posters`);

  if (error) {
    return (
      <p className="hero__error">Something went wrong while loading posters</p>
    );
  }

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__container">
          <motion.div
            variants={textVariants}
            initial="offscreen"
            whileInView="onscreen"
            className="hero-info"
          >
            <h1 className="hero-info__title">QUALITY FURNITURE JUST FOR YOU</h1>
            <p className="hero-info__text">
              Our company uses the finest materials to make your home more
              comfortable.
            </p>
            <Link
              to="products"
              duration={4000}
              smooth={true}
              className="hero-info__btn"
            >
              Go to products
            </Link>
          </motion.div>
          {loading ? (
            <p className="hero__loading">...Loading</p>
          ) : (
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              className="hero-slider"
              pagination={{ clickable: true }}
            >
              {data?.posters?.map((poster, i) => {
                return (
                  <SwiperSlide key={i} className="hero-slider__slider">
                    <img key={i} src={poster.image} alt="poster" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
