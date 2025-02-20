// src/components/Project1.js
import React, { useState, useEffect } from "react";
import "./Project1.css";

// Import images
import img1 from "../../asset/project1/1.jpg";
import img2 from "../../asset/project1/20.jpg";
import img22 from "../../asset/project1/21.jpg";
import img7 from "../../asset/project1/7.jpg";
import img8 from "../../asset/project1/8.png";
import img9 from "../../asset/project1/9.jpg";
import img10 from "../../asset/project1/10.png";
import img11 from "../../asset/project1/11.jpg";
import img12 from "../../asset/project1/12.jpg";
import img13 from "../../asset/project1/13.jpg";
import img17 from "../../asset/project1/17.png";
import img18 from "../../asset/project1/18.jpg";
import img19 from "../../asset/project1/3.png";
import img20 from "../../asset/project1/2.jpg";

// Add all 20 images here
const images = [
  img1,
  img22,
  img2,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img17,
  img18,
  img19,
  img20,
];

const Project1 = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  // Lazy loading for images as they come into view
  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.querySelectorAll(".gallery-image");
      gallery.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          img.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImageWidthClass = (image, index) => {
    if (image === img11 || image === img9) {
      return "gallery-image-90"; // Apply a special class to images 11 and 9
    } else {
      return ""; // No special class
    }
  };

  // Filter the images array to exclude img1 and img7
  const galleryImages = images.filter(
    (image) => image !== img1 && image !== img7
  );

  return (
    <div className="project1">
      {/* Static Image */}
      <div className="static-image">
        <img src={img7} alt="Project Image" className="static-image-img" />
      </div>

      {/* Modified Content Layout */}
      <div className="project1-content-new">
        <div className="project1-text-container">
          <div className="project1-description-container">
            <div className="project1-description">
              <h1 className="project1-title"> Between Spaces</h1>
              <p>
                "BETWEEN SPACES" is an affordable and equitable housing project de
                signed for all age group people coming from low-income and different cul
                tural background. The project is aligned to one of the noisest Troy High
                way, and is designed as a mixed used building. The housing serves for
                various community group of people from a working young profession to a
                family of four.
              </p>
              <p>
                The communication between communities and individuals is often diffi
                cult to observe in the present time. This project aims to address this issue
                by ensuring that the lack of interaction is effectively maintained. The de
                sign not only considers but emphasizes the engagement and communi
                cation between people, focusing on how this continuity can be observed
                across all age groups.
              </p>
              <p>
                The project beside designing also focuses on technical integration and
                designed following top 10 AIA building codes.
              </p>
            </div>
          </div>

          <div className="project1-metadata-container">
            <div className="project1-metadata">
              <div>
                <strong>Year</strong>
                <p>2023</p>
              </div>
              <div>
                <strong>Location</strong>
                <p> Troy road, Moscow, Idaho</p>
              </div>
              <div>
                <strong>Project Type</strong>
                <p>Social Housing</p>
              </div>
              <div>
                <strong>Supervisor</strong>
                <p> Luke Iver</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="project1-image-container">
          <img src={img8} alt="Project Image 1" className="project1-main-image" />
        </div> */}
      </div>

      {/* Two-column image gallery */}
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className={`gallery-image ${getImageWidthClass(image, index)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Project1;
