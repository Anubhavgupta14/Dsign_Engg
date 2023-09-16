import React, { useEffect, useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let bool = true;
    let func = () => {
      let box = document.getElementsByClassName("about-cont-black")[0];

      let black = document.getElementsByClassName("full-circle")[0];
      if (bool) {
        window.addEventListener("scroll", () => {
          if (box.getBoundingClientRect().y < window.screen.height / 1.75) {
            black.classList.add("anime-circle");
            setTimeout(() => {
              setShow(true);
            }, 1000);
            bool = false;
          }
        });
      }
    };
    func();
  }, []);

  return (
    <>
      <div className="about-cont-black flex-all" style={{backgroundColor:"#f9fbfc"}}>
        <div className="full-circle"></div>
        {show && (
          <>
            <div
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="0"
              data-aos="fade-up"
              data-aos-once={true}
              className="hefty-title about-left flex-all ha-title"
            >
              Dsign Engg
            </div>
            <div className="hefty-p about-right flex-all">
              <div
                className="hefty-info"
                data-aos-easing="ease-in-out"
                data-aos-once={true}
                data-aos-duration="800"
                data-aos-delay="0"
                data-aos="fade-up"
              >
                Embark on a journey into the core of metallurgy with our
                passionate team of experts. With a rich history in the field of
                Continuous Casting Machine (CCM), Ladle Calculations and AOD Calculations 
                , we stand as pioneers in driving innovation and
                reliability in the metallurgical industry. Our commitment to
                excellence resonates through our in-depth understanding of the
                intricate processes that shape raw materials into high-quality
                products. From optimizing ladle practices to enhancing casting
                efficiency, we seamlessly blend tradition with cutting-edge
                technology. Join us in unraveling the secrets of metallurgy as
                we continue to shape the future of metal production.
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default About;
