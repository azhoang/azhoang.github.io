import React from "react";
import { Link } from "react-router-dom";
import dayjs from "../../../hooks/dayjs";

interface IProps {
  createdAt: string;
  updatedAt: string;
  link: string;
  image?: string;
  title: string;
  description: string;
}

export default function BlogItem(props: IProps) {
  return (
    <article className="news-item box">
      <div className="news-item__image-wrap overlay overlay--45">
        <div className="news-item__date">
          {dayjs(props.createdAt).format("MMM D, YYYY")}
          {/* 16<span>Sep</span> */}
        </div>
        <Link className="news-item__link" to={props.link} />
        <img className="cover lazyload" src={props?.image} alt={props.title} />
      </div>
      <div className="news-item__caption">
        <h3 className="title title--h3">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </article>
  );
}
