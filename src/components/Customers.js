import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const CustomerLight = () => {
  const data = [
    {
      country: "Colombia",
      image: "1.png",
    },
    {
      country: "England",
      image: "2.png",
    },
    {
      country: "Israel",
      image: "5.png",
    },
    {
      country: "Cayman Islands",
      image: "4.png",
    },
    {
      country: "Australia",
      image: "3.png",
    },
    {
      country: "America",
      image: "6.png",
    },
  ];
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Countries Lived</h3>
            {/* <h3 className="title">Happy People</h3> */}
          </div>
          {/* /Main Title */}
          {/* Partners */}
              <div className="resumo_fn_partners">
                <ul>
          {data.map((data, index) => {
            return (
                  <li>
                    
                    <a
                      href="https://envato.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                      <img src={`img/partners/${data.image}`} alt="" />
                      <div>{data.country}</div>
                      </div>
                    </a>
                  </li>
               
                  );
                })}
                </ul>
              </div>
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
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
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default CustomerLight;
