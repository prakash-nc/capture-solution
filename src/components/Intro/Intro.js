import React from "react";
import Img from "gatsby-image";
import "./style.css";

export default ({ color, description, title, image }) => {
  return (
    <div style={{ backgroundColor: color, color: "white", padding: "1rem" }}>
      <section className="container section-wrapper">
        <h2>{title}</h2>
        <div className="image-wrapper">
          <Img
            className="intro-image"
            alt=""
            fluid={image.childImageSharp.fluid}
          />
        </div>
        <h2>{description}</h2>
      </section>
    </div>
  );
};
