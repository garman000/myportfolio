import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`As a Full-Stack Developer, my goal is to bring creative ideas to life on websites that can be enjoyed by people around the globe. Although I hail from Manchester, my passion for travel has taken me on exciting journeys, enabling me to explore diverse cultures and step out of my comfort zone. Working with new people brings me joy, as it presents fresh opportunities for growth and learning through shared experiences.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Steven Garman</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>1st October 1989</th>
                  </tr>
                  <tr>
                    <th>Hometown</th>
                    <th>Manchester</th>
                  </tr>
                  <tr>
                    <th>Something Secret</th>
                    <th>Manchester United {">"} All Other Clubs</th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:garman000@gmail.com">
                        garman000@gmail.com
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a
                  href="/pdf/steCV.pdf"
                  download
                  //download="steCV.pdf"
                  style={{ cursor: "pointer" }}
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experiences
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
                <li className={activeList("tab4")}>
                  <a href="#" onClick={() => setToggleList("tab4")}>
                    Interests
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <a target="_blank" href="https://disclosed.com">
                            <h5>Disclosed.com</h5>
                          </a>
                          <span>( 2022 - 2023 )</span>
                        </div>
                        <h3>Lead Front-End Developer</h3>
                        <p>
                          As the Lead Front End Developer at{" "}
                          <a href="http://disclosed.com" target="_blank">
                            Disclosed.com
                          </a>, I played a vital role in the development of a new
                          startup. In addition to leading market research and
                          wireframe development, I also managed a designer and
                          another front-end developer, ensuring that all
                          deliverables were of the highest quality. I
                          collaborated closely with the back-end developer to
                          ensure a seamless and integrated product. During my
                          time at Disclosed.com, I gained valuable skills and
                          knowledge in NextJS, Django &amp; Tailwind.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>ITC Tech Challenge - Israel</h5>
                          <span>( 2021 — 2022 )</span>
                        </div>
                        <h3>Full-Stack Developer Bootcamp</h3>
                        <p>
                          Training programme, designed to teach many of the
                          desired skills &amp; attributes necessary to succeed
                          in the hi-tech world. Autonomous learning alongside a
                          structure to produce well rounded full-stack
                          developers.
                          <br></br>
                          <strong>Tech Stack:</strong> Javascript, ReactJS,
                          NodeJS, NextJS, Bootstrap, Firebase, MongoDB, MySQL
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Kimpton Hotel - Cayman Islands</h5>
                          <span>( 2016 — 2020 )</span>
                        </div>
                        <h3>Server</h3>
                        <p>
                          Having the opportunity to live in the breathtaking
                          Cayman Islands and work for a prestigious hotel brand
                          like Kimpton was truly a pleasure. Working alongside
                          talented individuals from over 100 countries was an
                          incredible learning experience, allowing me to gain a
                          deeper understanding of the world and its many diverse
                          cultures while also discovering more about myself.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>SuperFuds - Colombia</h5>
                          <span>( 2017 )</span>
                        </div>
                        <h3>Marketing &amp; Business Development Intern</h3>
                        <p>
                          I had the privilege of working for an amazing startup
                          in Bogota that promotes sustainable and healthy living
                          through its unique and healthy products. It was a
                          fulfilling experience to not only contribute to their
                          mission but also to learn Spanish during my time
                          there. Mission accomplished!{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>ITC Tech Challenge</h5>
                          <span>( 2021 — 2022 )</span>
                        </div>
                        <h3>Full-Stack Development</h3>
                        <p>
                          A training program designed to qualify Full-Stack web
                          developers. The program is a full-time, hands-on
                          accelerator, which practices research and autonomous
                          learning while emulating a real-life work environment.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Leeds Metropolitan University</h5>
                          <span>( 2010 — 2013 )</span>
                        </div>
                        <h3>Marketing and Advertising Management</h3>
                        <p>
                          A course teaching students the principles of marketing
                          and advertising in an extremely well structured
                          environment. Self study and motivation were skills
                          aquired.{" "}
                        </p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Clolumbia College</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li> */}
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        HTML &amp; CSS(Including Bootstrap/ChakraUI/Tailwind)
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Javascript(ES6), ReactJS, NextJS &amp; NodeJS(Express),
                        Django
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">SQL &amp; MongoDB </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Rest APIs, Git, Vercel &amp; Firebase
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                    As a full-stack developer with a keen interest in front-end
                    development, I may not have a formal background in design,
                    but I am passionate about creating visually appealing and
                    user-friendly web pages. I take great pleasure in exploring
                    my creativity and bringing innovative ideas to life through
                    my work. UI/UX design is an area of particular interest to
                    me, and I value its importance in creating a seamless user
                    experience.
                  </p>
                </div>
              </div>
              <div id="tab4" className={`tab_item ${activeList("tab4")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Sports ( Tennis, Football, Gym, JumpRope ){" "}
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "50%" }}
                      >
                        92%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Investing ( Stocks &amp; Crypto )
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Travel ( Visited = 30+ countries | Lived = 6 countries ){" "}
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Languages ( English = Native | Spanish = Advanced ){" "}
                      </h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span> */}
                      <div className="bg_wrap">
                        <div
                          className="progress_bg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Boxed List */}

              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
