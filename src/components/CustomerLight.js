import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
import Image from "next/image";
import JavaScript from "../../public/img/techstack/javascript.png";
import React from "../../public/img/techstack/react-logo.png";
import NextJS from "../../public/img/techstack/nextJS.png";
import NodeJS from "../../public/img/techstack/nodeJS.png";
import MongoDB from "../../public/img/techstack/mongoDB.png";
import html from "../../public/img/techstack/html.png";
import tailwind from "../../public/img/techstack/tailwind.png";
import github from "../../public/img/techstack/github.png";

const CustomerLight = () => {
  const data = [
    {
      stack: "JavaScript",
      image: "javascript.png",
      importLogo: JavaScript,
    },
    {
      stack: "reactJS",
      image: "react-logo.png",
      importLogo: React,
    },
    {
      stack: "nextJS",
      image: "nextJS.png",
      importLogo: NextJS,
    },
    {
      stack: "nodeJS",
      image: "nodeJS.png",
      importLogo: NodeJS,
    },
    {
      stack: "mongoDB",
      image: "mongoDB.png",
      importLogo: MongoDB,
    },
    {
      stack: "html",
      image: "html.png",
      importLogo: html,
    },
    {
      stack: "tailwind",
      image: "tailwind.png",
      importLogo: tailwind,
    },
    {
      stack: "github",
      image: "github.png",
      importLogo: github,
    },
  ];
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Tech Stack</h3>
            {/* <h3 className="title">Happy People</h3> */}
            <p className="desc">
              As a developer, I am currently familiar with a range of
              technologies and tools such as HTML, CSS, JavaScript, and React.
              However, my true passion lies in constantly growing and evolving
              as a developer. I am not afraid to step out of my comfort zone and
              learn new programming languages or frameworks to enhance my skills
              and stay up-to-date with the latest industry trends.
            </p>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            {/* <ul> */}
            <div className="mediaQuery">
              {data.map((data, index) => {
                return (
                  <a>
                    <div
                      style={{
                        width: "200px",
                        display: "grid",
                        gridTemplateColumns: "auto auto auto auto",
                        gridGap: "10px",
                        padding: "10px",
                      }}
                    >
                      <div key={index}>
                        <Image src={data.importLogo} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="resumo_fn_main_title">
              <h3 className="subtitle">Tech Stack</h3>
              {/* <h3 className="title">Happy People</h3> */}

              <p className="desc">
                I believe that learning is a lifelong process, and I am
                committed to expanding my knowledge and pushing myself to new
                heights. As such, I am excited about the prospect of taking on
                new challenges and learning new technologies that will help me
                to become a better developer.
              </p>
            </div>
            {/* </ul> */}
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          {/* <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div> */}
          {/* <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key={1}>
                <div className="title_holder">
                  <p className="desc">
                    “ They really nailed it. This is one of the best themes I
                    have seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites. ”
                  </p>
                  <h3 className="title">Albert Walker</h3>
                  <h3 className="subtitle">Freelancer &amp; Designer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={2}>
                <div className="title_holder">
                  <p className="desc">
                    {`“ This was exactly what I needed for my portfolio,
                              and it looks great. I had a couple issues that
                              support helped troubleshoot both via email and on
                              the comments, which definitely made it worth the
                              price. I'm very pleased with this purchase. ”`}
                  </p>
                  <h3 className="title">Anna Barbera</h3>
                  <h3 className="subtitle">Photographer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={3}>
                <div className="title_holder">
                  <p className="desc">
                    “ Had a problem with the layout after Installation- found no
                    approach. The support reacted quickly and competently. And
                    solved the problem between Elementor and a WordPress update.
                    Great! ”
                  </p>
                  <h3 className="title">Dana Atkins</h3>
                  <h3 className="subtitle">Customer</h3>
                </div>
              </SwiperSlide>
            </Swiper> */}
          {/* </div> */}
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default CustomerLight;
