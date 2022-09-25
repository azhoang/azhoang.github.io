import React from "react";
import Skeleton from "react-loading-skeleton";

export default function BlogItem() {
  return (
    <article className="news-item box">
      <div className="news-item__image-wrap overlay overlay--45">
        <Skeleton className="cover lazyload" />
      </div>
      <div className="news-item__caption">
        <h3 className="title title--h3">
          <Skeleton />
        </h3>
        <p>
          <Skeleton />
        </p>
      </div>
    </article>
  );
}
