import React from "react";
import "./Advantages.scss";
import advantagesImg from "../../img/advantagesImg.jpg";
import { motion } from "framer-motion";

function Advantages() {
  const textVariants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const imgVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section className="advantages">
      <div className="advantages__container">
        <motion.div
          variants={imgVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="advantages__img"
        >
          <img src={advantagesImg} alt="Team" />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="advantages__right"
        >
          <h2 className="advantages__title">Why Choose Us?</h2>
          <ul className="advantages__list">
            <li className="advantages__item">
              Over 20 years of experience in furniture manufacturing.
            </li>
            <li className="advantages__item">
              More than 10,000 satisfied customers.
            </li>
            <li className="advantages__item">
              In case of any defects found by you, we will compensate for the
              damages or create a new product.
            </li>
            <li className="advantages__item">
              We tailor everything according to your requirements and drawings.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Advantages;
