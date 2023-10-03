
import React, { useState } from "react";
// import Button from '../Button'
import PlainButton from "../PlainButton/plainbutton";
import Faq from "../faq2/faq2";

// import Link from 'next/link'

const Faqs = () => {
  const [num, setNum] = useState(5);
  const [active, setActive] = useState(null);
  let faqs = [
    {
      ques: "How do I sign in to my account?",
      ans: "To sign in, click on the Sign In button located at the top right corner of the page. Enter your username and password, then click Sign In. If you don't have an account, you can click on Create Account to register.",
    },
    {
      ques: "What is included in your Premium Pack?",
      ans: "Our Premium Pack offers an enhanced experience, granting you access to exclusive content, advanced tools, and in-depth insights into AOD Calculations, Ladle Calculations and Continuous Casting Machine (CCM) Solutions. You'll be able to dive deeper into metallurgy with premium resources and expert analysis.",
    },
    {
      ques: "How can I purchase the Premium Pack?",
      ans: "Purchasing our Premium Pack is simple! After signing in to your account, navigate to the Premium section. Choose the Premium Pack that suits your needs and proceed to the checkout. You can make a secure payment using your preferred method, and your premium access will be activated instantly.",
    },
    {
      ques: "What content is available for free users?",
      ans: "Free users have access to a selection of foundational materials and introductory resources. These materials cover essential concepts in metallurgy, offering a great starting point for those new to the field. While the free content provides valuable insights, the Premium Pack unlocks more comprehensive content and advanced tools.",
    },
    {
      ques: " What is the difference between free and paid content?",
      ans: "Free content includes basic resources designed to introduce you to metallurgical concepts. Paid content within the Premium Pack offers a deeper exploration of Ladle Calculations and Continuous Casting Machine (CCM) Solutions. Premium content includes in-depth articles, tutorials, case studies, and access to specialized tools for a comprehensive learning experience.",
    },
    {
      ques: "How can I get in touch with your team?",
      ans: "You can contact us by visiting the Contact Us page. Fill out the contact form with your inquiry, and our dedicated support team will get back to you as soon as possible. We're here to assist you with any questions, feedback, or concerns you may have.",
    },
  ];
  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  }
  let loadless = () => {
    setNum(5);
    window.scrollTo(0, findPos(document.getElementById("fcont")) - 80);
  };

  return (
    <>
      <div className="faq-bg" >
        <div className="faqs-cont">
          <div className="faqs-title ha-title">
            <div
              className="faq-one"
            >
              Frequently Asked Question
            </div>
          </div>
          <div className="faq-cont" id="fcont">
            {faqs.slice(0, num).map((faq, index) => {
              return (
                <div key={index}>
                  <Faq
                    ques={faq.ques}
                    ans={faq.ans}
                    index={index + 2}
                    active={active}
                    setActive={setActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="learn flex-all" >Load More</div> */}
        <div
          className="faq-btn"
          // onClick={() =>  { num<faqs.length?setNum(num + 5):setNum(num - 5) }}>
          onClick={() => {
            num == 5 ? setNum(faqs.length) : loadless();
          }}
        >
          {/* <Button text='Load More' /> */}
          <button className="btn_main">
            {" "}
            {num == 5 ? "Load More" : "Load less"}{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Faqs;
