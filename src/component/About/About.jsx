import React from "react";
import "./About.css";
import Carousel from "react-material-ui-carousel";
import images from "./Images.js";

const About = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Get the elements to animate
    const aboutSection = document.querySelector(".about-section");
    const founders = document.querySelector(".founder-info");
    const galleryHeading = document.querySelector(".gallery-heading");
    const carouselContainer = document.querySelector(".carousel-container");

    // Add 'active' class to trigger animation
    aboutSection.classList.add("active");
    founders.classList.add("active");
    galleryHeading.classList.add("active");
    carouselContainer.classList.add("active");
  });

  return (
    <>
      <div className="about-page">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Get to know Sargam Musical</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Story Behind Sargam</h2>
            <p>
              In the midst of their college days,{" "}
              <span style={{ fontWeight: "bold" }}>Surajit</span> and{" "}
              <span style={{ fontWeight: "bold" }}>Somnath</span> shared a deep
              love for music. Despite facing tough times, they decided to chase
              their passion and open a music instrument store called "Sargam
              Musical Store" in 2014. Over the next 10 years, their store became
              famous across West Bengal and India for its wide range of musical
              instruments. <br /> <br />
              Surajit and Somnath poured their hearts into their store, making
              it a special place where people could find everything they needed
              to create beautiful music. Their hard work and dedication paid
              off, and Sargam Musical Store became a beloved part of the
              community. <br /> <br />
              Their journey teaches us that with determination and a love for
              what you do, anything is possible. Today, Sargam Musical Store
              stands as a symbol of hope and inspiration, showing us the power
              of following our dreams. Indeed, in the annals of West Bengal's
              musical legacy, the tale of Surajit, Somnath, and Sargam Musical
              Store shall forever resonate as a symphony of hope, courage, and
              the boundless possibilities that lie within the realm of a shared
              dream.
            </p>
          </div>

          <div className="founders">
            <div className="founder-info">
              <img
                src="https://scontent.fccu10-1.fna.fbcdn.net/v/t31.18172-8/21752867_1416668725106915_1194250930616328994_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=vA-ipq4rJtUAX9I_Cmd&_nc_ht=scontent.fccu10-1.fna&oh=00_AfDIOEw6zh6wjHIqzhI1afCld4IcS_6NBYwHIAwCtUKKMA&oe=65F06E90"
                alt="Somnath's Image"
              />
              <div className="text">
                <h2>Somnath Majumdar</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam facilis nemo necessitatibus quidem officia maxime
                  reprehenderit vitae saepe. Accusamus, molestias. Aperiam,
                  delectus eligendi cumque commodi laborum perferendis minus
                  illo. Deleniti, culpa. Doloremque laboriosam quaerat obcaecati
                  aspernatur id animi, ipsum suscipit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="founder-info">
              <div className="text">
                <h2>Surajit Goswami</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam facilis nemo necessitatibus quidem officia maxime
                  reprehenderit vitae saepe. Accusamus, molestias. Aperiam,
                  delectus eligendi cumque commodi laborum perferendis minus
                  illo. Deleniti, culpa. Doloremque laboriosam quaerat obcaecati
                  aspernatur id animi, ipsum suscipit.
                </p>
              </div>
              <img
                src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/318635890_6102768106400510_7803187992924932115_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=oMShcD6KjqcAX9Fp4qG&_nc_ht=scontent.fccu10-1.fna&oh=00_AfBJos3cYV6SycQcm8eQInJ7RuakXMWrNhGZ6ZrkDkccBQ&oe=65CE0C34"
                alt="Surajit's Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="gal-section">
        <h2 className="gallery-heading">Our Gallery</h2>
        <div className="carousel-container">
          <Carousel className="carouselClass">
            {images &&
              images.map((item, i) => (
                <div className="image-wrapper" key={i}>
                  <img
                    className="carousel-image"
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default About;
