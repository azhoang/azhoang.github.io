import React from "react";
import Markdown from "../../components/Markdown";
import { about } from "../../config";

export default function About() {
  return (
    <>
      {/* About */}
      <div className="section mt-0">
        <h1 className="title title--h1 title__separate">About Me</h1>
        <div className="pt-2 pt-sm-3">
          <Markdown>{about.description}</Markdown>
          {/* <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p className="mb-0">
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p> */}
        </div>
      </div>
      {/* What */}
      <div className="section">
        <h2 className="title title--h2">What I'm Doing</h2>
        <div className="row">
          {about.doing.map((item, index: number) => (
            <div className="col-12 col-lg-6 case-item-wrap" key={index}>
              <div className="case-item">
                <img
                  className="case-item__icon"
                  src={item.icon}
                  alt={item.title}
                />
                <h3 className="title title--h3">{item.title}</h3>
                <p className="case-item__caption">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Clients */}
      <div className="section">
        <h2 className="title title--h2">Clients</h2>
        <div className="swiper-container js-carousel-clients">
          <div className="swiper-wrapper">
            {about.clients.map((item, index: number) => (
              <div className="swiper-slide" key={index}>
                <a target="_blank" href={item.src} rel="noreferrer">
                  <img src={item.icon} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </>
  );
}
