import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "TravelWise",
      tag: "Intelligient Travelling",
      image: "travelWise.jpg",
      desc: [
        {
          p: "The project I developed using NextJS was centered around travel and event planning, and it allowed users to easily find and purchase tickets for popular events like Oktoberfest, Tomorrowland, and Carnivals. Through this project, I was able to supplement the skills I learned while working with NextJS with real-world experience in building a web application from scratch. Specifically, I was able to utilize NextJS's static and server-side rendering capabilities to optimize the website's performance, ensuring that users could quickly and seamlessly navigate through the site and complete their purchase. Overall, the project I developed using NextJS was an invaluable experience that allowed me to supplement my technical skills with practical experience in building a real-world web application.",
        },
      ],
    },
    {
      name: "FaceIT",
      tag: "Healhty, Lifestyle",
      image: "faceITgif.gif",
      video: "",

      desc: [
        {
          p: "During a Hackathon event, I worked with a team of 3 Full-Stack developers and 3 Data Scientists as part of my studies. Our objective was to develop an application that could enhance the health and well-being of individuals in their day-to-day lives. Thus, we created FaceIT, which involved asking users several questions about their current lifestyle choices (such as activity levels) and passing this data through an algorithm that generated a personalized life trajectory. The key feature of our application was its ability to accurately age faces, which prompted users to consider making changes in their lifestyle choices to improve their appearance. We provided users with a now and then image to demonstrate the potential impact of the suggested lifestyle changes.",
        },
      ],
    },
    {
      name: "PawPaw Rescue",
      tag: "Pet Adoption",
      image: "pawPaw.jpg",

      desc: [
        {
          p: "During my time at ITC Full Stack bootcamp, I was given the opportunity to create a full-stack application for my final project using ReactJS, NodeJS, MongoDB, and Bootstrap. The project involved building a pet adoption platform that enabled users to adopt or foster animals, while also allowing admins to add and remove pets as needed. Through this project, I gained valuable experience in both back-end development and database connectivity, which helped me improve my technical skills in these areas. However, what stood out to me most was the opportunity to work on the front-end development of the project, particularly when it came to UI/UX. I discovered that I had a skill for design and found it incredibly enjoyable to create an intuitive user experience for the platform. Overall, the project was a fantastic learning experience that allowed me to improve my technical skills while also discovering my passion for UI/UX design",
        },
      ],
    },
    {
      name: "disclosed.com",
      tag: "Trusted Review System",
      image: "disclosedgif.gif",

      desc: [
        {
          p: "During my time at Dislcosed.com, I played a key role in the development of a new startup. As part of my responsibilities, I led market research efforts and developed wireframes that served as the foundation for the company's new product. Additionally, I acted as a reference for the designer, providing guidance and direction as needed to ensure that the product's design met the highest quality standards. To further enhance the product's quality, I managed the designer and another front-end developer, collaborating closely with them to ensure a seamless and integrated product. This required working closely with the back-end developer as well, which helped me gain valuable skills and knowledge in both NextJS and Django. Overall, my time at Dislcosed.com was an invaluable experience that allowed me to deepen my understanding of web development and work closely with a team of talented professionals",
        },
      ],
    },
    {
      name: "mygympassport.com",
      tag: "Universal Gym Passport",
      image: "gympassgif.gif",

      desc: [
        {
          p: "Index test  --- I created this website as a side project with the intention of transforming it into a thriving business in the future. As someone who loves to travel and explore, I've always found it challenging to maintain my fitness routine during my trips, especially when gym access is limited. To address this issue, I came up with the idea of creating myGymPassport, a platform that makes it easy and accessible for everyone to find gyms while travelling. With myGymPassport, travellers can now enjoy their trips without having to worry about missing their workout routine.",
        },
      ],
    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map((d, i) => {
              console.log("d data received", d);
              return (
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <a href={`http://${d.name}`} target="_blank">
                      {" "}
                      <h3 className="fn__title">{d.name}</h3>
                    </a>

                    <div className="img_holder">
                      {d.video ? (
                        <video controls width="100%">
                          <source src={`/videos/${d.video}`} type="video/mp4" />
                        </video>
                      ) : (
                        <img src="/img/thumb/square.jpg" alt="" />
                      )}
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${d.image}`}
                        // data-bg-img={d.image}
                      />
                    </div>

                    {d.desc.map((des, i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
              );
            })}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
