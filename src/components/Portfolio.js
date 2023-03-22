import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
import disclosedDark from "../../public/img/portfolio/disclosedDark.jpeg";
import Image from "next/image";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);

  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/travelWise.jpg"
                />
              </div>
              <div className="title_holder">
                <p>Travel Made Easy</p>
                <h3>
                  <a href="#">TravelWise</a>
                </h3>
              </div>
              <p className="text-justify">
                TravelWise was the brainstorm off years of adventures. Difficult
                at times to manage and coordinate. Hence the need for an
                intelligient travl companion. A place where all travel is made
                easy.
              </p>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/pawPaw.jpg"
                />
              </div>
              <div className="title_holder">
                <p>Pet Adoption Project</p>
                <h3>
                  <a href="#">PawPaw Rescue</a>
                </h3>
              </div>
              <p className="text-justify">
                PawPaw was my first full stack project I created. It was part of
                my studies at{" "}
                <strong>
                  <a href="https://www.itc.tech/" target="_blank">
                    ITC Tech Challenge
                  </a>
                </strong>{" "}
                and gave me a gretaer rounded understanding of the capabilities
                of code and further gave me proof that I enjoy greatly the whole
                process of creating websites{" "}
              </p>
            </SwiperSlide>

            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/faceIT.jpg"
                />
              </div>
              <div className="title_holder">
                <p>Healhty, Lifestyle</p>
                <h3>
                  <a href="#">FaceIT</a>
                </h3>
              </div>
              <p className="text-justify">
                At FaceIT, my team and I developed a unique app in 24 hours. It
                calculated future representations of users based on lifestyle
                activities and data points. Although we placed second, our
                product sparked debate about its market impact. Gimic or
                gamechanger? Overall, FaceIT challenged me to think creatively
                and work effectively under tight deadlines.
              </p>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/disclosedDark.jpeg"
                />
              </div>

              <div className="title_holder">
                <p>Trusted Review Systems</p>
                <h3>
                  <a href="http://disclosed.com" target="_blank">
                    Disclosed.com
                  </a>
                </h3>
              </div>
              <p className="text-justify">
                My time at disclosed.com as a lead developer was a source of
                pride for me. I oversaw the work of several other developers and
                designers to create our product, which gave me a glimpse into
                the world of startups. I gained valuable insight into how
                businesses grow and evolve, placing a great importance on
                intuitiveness and user expereince. As my first job after
                completing my course, it provided me with an excellent
                opportunity to hone my coding skills and increase my business
                acumen.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
