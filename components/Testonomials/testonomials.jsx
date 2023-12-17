import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

function App() {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return
 
() =>
 
window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 m-auto">
      <h2 className="testonomial_top">Testonomials</h2>
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className=" h text-black rounded-xl"
            >
              

              <div
                className="flex flex-col items-center justify-center gap-4 p-4"
                style={{ alignItems: "center", border:"2px solid grey" }}
              >
                <p className="text-xl text-center font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `"The Design Engg has been an absolute game-changer for my projects. The wealth of resources available here"`,
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `"Being part of The Design Engg community is like finding my creative tribe. The discussions and collaborative projects"`,
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `"The Design Engg doesn't just throw theory at you; it provides real, practical solutions for the challenges we face in the field."`,
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `"Navigating The Design Engg website is a breeze! The user-friendly interface makes my experience seamless."`,
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `"The Design Engg apart is its commitment to inclusivity. This platform welcomes professionals from diverse backgrounds"`,
  },
];

export default App;
