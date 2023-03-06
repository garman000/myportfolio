import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
import disclosedDark from "../../public/img/portfolio/disclosedDark.jpeg";
import disclosedLight from "../../public/img/portfolio/disclosedLight.jpeg";
import Image from 'next/image'

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
                <div className="abs_img" data-bg-img="img/portfolio/travelWise.jpg" />
              </div>
              <div className="title_holder">
                <p>Travel Made Easy</p>
                <h3>
                  <a href="#">TravelWise</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Travel Made Easy</p>
                <h3 className="fn__title">TravelWise</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/travelWise.jpg" />
                </div>
                <p className="fn__desc">
                  Travel Sed ornare tellus a odio bibendum, at tristique sapien
                  malesuada. Proin sagittis maximus accumsan. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque gravida quam sit amet elit varius
                  tempor. Pellentesque purus eros, blandit eu mollis vel,
                  commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at
                  nunc consectetur efficitur ut quis est. Proin posuere orci
                  eget vulputate fringilla. Curabitur placerat massa eget
                  efficitur cursus. Sed sollicitudin rhoncus blandit. Nam
                  accumsan vestibulum enim. Sed rutrum eu leo pellentesque
                  lobortis. Integer ornare fringilla arcu, eu mattis risus
                  convallis in.
                </p>
              </div>
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
                <div className="abs_img" data-bg-img="img/portfolio/pawPaw.jpg" />
              </div>
              <div className="title_holder">
                <p>Pet Adoption Project</p>
                <h3>
                  <a href="#">PawPaw Rescue</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Pet Adoption Project</p>
                <h3 className="fn__title">PawPaw Rescue</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/pawPaw.jpg" />
                </div>
                <p className="fn__desc">
                  Pet ed ornare tellus a odio bibendum, at tristique sapien
                  malesuada. Proin sagittis maximus accumsan. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque gravida quam sit amet elit varius
                  tempor. Pellentesque purus eros, blandit eu mollis vel,
                  commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at
                  nunc consectetur efficitur ut quis est. Proin posuere orci
                  eget vulputate fringilla. Curabitur placerat massa eget
                  efficitur cursus. Sed sollicitudin rhoncus blandit. Nam
                  accumsan vestibulum enim. Sed rutrum eu leo pellentesque
                  lobortis. Integer ornare fringilla arcu, eu mattis risus
                  convallis in.
                </p>
                <p className="fn__desc">
                  Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                  dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                  pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia
                  congue, mauris magna tempus nibh, in mollis eros enim a
                  tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit
                  pharetra metus. Phasellus id feugiat purus. In vel elit eu
                  lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet
                  libero sit amet lectus pellentesque sagittis. Curabitur
                  blandit ante quis erat dapibus viverra. Maecenas consequat
                  pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet
                  dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac
                  nulla. Morbi sed ligula ultrices, ornare mauris id, auctor
                  arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula
                  ex dapibus. Aenean venenatis metus eros, vel faucibus lorem
                  porttitor eu.
                </p>
              </div>
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
                <Image src={disclosedDark} alt="image" />
                  {/* <Image src={disclosedLight} alt="image" /> */}
                <div className="abs_img" data-bg-img="img/portfolio/disclosedDark.jpeg" />
              </div>
              <div className="title_holder">
                <p>Trusted Review Systems</p>
                <h3>
                <a href="http://www.disclosed.com" target="_blank">Disclosed.com</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Trusted Casino Reviews</p>
                <h3 className="fn__title">Disclosed.</h3>
                <div className="img_holder">
                  <Image src={disclosedDark} alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/disclosedDark.jpeg" />
                </div>
                <p className="fn__desc">
                  disclosed
                </p>
                <p className="fn__desc">
                 disclosed
                </p>
              </div>
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
                <div className="abs_img" data-bg-img="img/portfolio/faceIT.jpg" />
              </div>
              <div className="title_holder">
                <p>Healhty, Lifestyle</p>
                <h3>
                  <a href="#">FaceIT</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Healhty, Lifestyle</p>
                <h3 className="fn__title">FaceIT</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/faceIT.jpg" />
                </div>
                <p className="fn__desc">
                  FaceIT Sed ornare tellus a odio bibendum, at tristique sapien
                  malesuada. Proin sagittis maximus accumsan. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque gravida quam sit amet elit varius
                  tempor. Pellentesque purus eros, blandit eu mollis vel,
                  commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at
                  nunc consectetur efficitur ut quis est. Proin posuere orci
                  eget vulputate fringilla. Curabitur placerat massa eget
                  efficitur cursus. Sed sollicitudin rhoncus blandit. Nam
                  accumsan vestibulum enim. Sed rutrum eu leo pellentesque
                  lobortis. Integer ornare fringilla arcu, eu mattis risus
                  convallis in.
                </p>
                <p className="fn__desc">
                  FaceIT2 Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                  dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                  pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia
                  congue, mauris magna tempus nibh, in mollis eros enim a
                  tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit
                  pharetra metus. Phasellus id feugiat purus. In vel elit eu
                  lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet
                  libero sit amet lectus pellentesque sagittis. Curabitur
                  blandit ante quis erat dapibus viverra. Maecenas consequat
                  pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet
                  dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac
                  nulla. Morbi sed ligula ultrices, ornare mauris id, auctor
                  arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula
                  ex dapibus. Aenean venenatis metus eros, vel faucibus lorem
                  porttitor eu.
                </p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            > */}
              {/* <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/4.jpg" />
              </div>
              <div className="title_holder">
                <p>mobile, design</p>
                <h3>
                  <a href="#">Yellow Phone</a>
                </h3>
              </div> */}
              {/* <div className="fn__hidden">
                <p className="fn__cat">mobile, design</p>
                <h3 className="fn__title">Yellow Phone</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/4.jpg" />
                </div>
                <p className="fn__desc">
                  Sed ornare tellus a odio bibendum, at tristique sapien
                  malesuada. Proin sagittis maximus accumsan. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque gravida quam sit amet elit varius
                  tempor. Pellentesque purus eros, blandit eu mollis vel,
                  commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at
                  nunc consectetur efficitur ut quis est. Proin posuere orci
                  eget vulputate fringilla. Curabitur placerat massa eget
                  efficitur cursus. Sed sollicitudin rhoncus blandit. Nam
                  accumsan vestibulum enim. Sed rutrum eu leo pellentesque
                  lobortis. Integer ornare fringilla arcu, eu mattis risus
                  convallis in.
                </p>
                <p className="fn__desc">
                  Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                  dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                  pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia
                  congue, mauris magna tempus nibh, in mollis eros enim a
                  tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit
                  pharetra metus. Phasellus id feugiat purus. In vel elit eu
                  lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet
                  libero sit amet lectus pellentesque sagittis. Curabitur
                  blandit ante quis erat dapibus viverra. Maecenas consequat
                  pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet
                  dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac
                  nulla. Morbi sed ligula ultrices, ornare mauris id, auctor
                  arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula
                  ex dapibus. Aenean venenatis metus eros, vel faucibus lorem
                  porttitor eu.
                </p>
              </div> */}
            {/* </SwiperSlide> */}
            {/* <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(5);
              }}
              data-index={5}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/5.jpg" />
              </div>
              <div className="title_holder">
                <p>mobile, design</p>
                <h3>
                  <a href="#">Ice Cream</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">mobile, design</p>
                <h3 className="fn__title">Ice Cream</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/5.jpg" />
                </div>
                <p className="fn__desc">
                  Sed ornare tellus a odio bibendum, at tristique sapien
                  malesuada. Proin sagittis maximus accumsan. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque gravida quam sit amet elit varius
                  tempor. Pellentesque purus eros, blandit eu mollis vel,
                  commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at
                  nunc consectetur efficitur ut quis est. Proin posuere orci
                  eget vulputate fringilla. Curabitur placerat massa eget
                  efficitur cursus. Sed sollicitudin rhoncus blandit. Nam
                  accumsan vestibulum enim. Sed rutrum eu leo pellentesque
                  lobortis. Integer ornare fringilla arcu, eu mattis risus
                  convallis in.
                </p>
                <p className="fn__desc">
                  Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                  dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                  pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia
                  congue, mauris magna tempus nibh, in mollis eros enim a
                  tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit
                  pharetra metus. Phasellus id feugiat purus. In vel elit eu
                  lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet
                  libero sit amet lectus pellentesque sagittis. Curabitur
                  blandit ante quis erat dapibus viverra. Maecenas consequat
                  pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet
                  dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac
                  nulla. Morbi sed ligula ultrices, ornare mauris id, auctor
                  arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula
                  ex dapibus. Aenean venenatis metus eros, vel faucibus lorem
                  porttitor eu.
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
