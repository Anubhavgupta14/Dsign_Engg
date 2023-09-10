
import React, { useState } from "react";

import Link from "next/link";

const CardComponent = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isRotating, setIsRotating] = useState(false);

  const cards = [
    {
      text: "CCM Solutions",
      altText:
        "CCM Solutions presents an innovative CCM Calculator designed to simplify your customer communication management. FREE",
      backgroundImg:
        "url(https://res.cloudinary.com/dhlsvwpny/image/upload/v1693247285/video_image-2i_onzzlv_1_p7ybkj.jpg)",
        price: "FREE",
        route: "/components/CC_machine"
    },
    {
      text: "Ladle Calculator",
      altText:
        "Introducing Ladle Calculator, your go-to solution for precise ladle and pouring calculations. PAID",
      backgroundImg:
        "url(https://res.cloudinary.com/dhlsvwpny/image/upload/v1693247252/img1_1_m4dmrp.jpg)",
        price: "PAID",
        route: "/components/Ladle"
    },
    {
      text: "AOD Calculator",
      altText:
        "Presenting AOD Calculator, your essential partner for accurate AOD (Argon Oxygen Decarburization) calculations. PAID",
      backgroundImg:
        "url(https://res.cloudinary.com/dhlsvwpny/image/upload/v1693247322/video_image-ZSpLfX0uY_1_krd1jw.jpg)",
        price: "PAID",
        route: "/"
    },
  ];

  const handleCardHover = (index) => {
    setHoveredCardIndex(index);

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <div>
      <h2 className="heading" data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-offset="0"
                data-aos="fade-up"
      >Our Products</h2>
      <div className="cardContainer" >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${hoveredCardIndex === index ? "hovered" : ""}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseMove={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(null)}
            style={{
              backgroundImage:
                hoveredCardIndex === index ? "none" : card.backgroundImg,
            }}
          >
            <div className="cardTextContainer">
              <div className="cardText">
                {hoveredCardIndex === index ? card.altText : card.text}
                <div
                  className={hoveredCardIndex === index ? "none" : "arrowIcon"}
                ></div>
              </div>
              {hoveredCardIndex === index && (
                <div>
                  <Link href={card.route}><button className="flipButton">Visit</button></Link>
                </div>
              )}
              {hoveredCardIndex === index && (
                <div className="price">
                  {card.price}
                </div>
              )}
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
