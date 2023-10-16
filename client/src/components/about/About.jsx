import React from "react";
import "./About.scss";
import mapAbout from "../../img/map.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-page__container">
        <img src={mapAbout} alt="our location" />
        <p>
          Welcome to our furniture store in the village of Berestiane! Here, you
          will find a wide selection of furniture made from high-quality woods
          such as oak, pine, ash, and alder. Our furniture is known for its
          exceptional strength and durability because we use only the finest
          materials. In addition, we offer furniture in various styles, from
          classic to modern, so that everyone can find something that suits
          them. Our experts will help you choose furniture that meets your needs
          and budget, and they will answer all your questions. We aim to make
          your furniture shopping experience as pleasant and convenient as
          possible. We invite you to visit our store and get acquainted with our
          furniture from the very first personal impressions. We are confident
          that you will find something you like that will enhance your home!
        </p>
      </div>
    </div>
  );
}

export default About;
