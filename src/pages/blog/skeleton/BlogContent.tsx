import React from "react";
import Skeleton from "react-loading-skeleton";

export default function BlogContent() {
  return (
    <div className="pb-3">
      <header className="header-post">
        <h1 className="title title--h1">
          <Skeleton borderRadius={5} />
        </h1>
        <div className="caption-post">
          <p>
            <Skeleton borderRadius={5} />
            <Skeleton borderRadius={5} />
            <Skeleton borderRadius={5} />
          </p>
        </div>
        <div className="header-post__image-wrap">
          <Skeleton borderRadius={5} height={400} />
        </div>
      </header>
      <div className="caption-post">
        <p>
          <Skeleton borderRadius={5} />
          <Skeleton borderRadius={5} />
          <Skeleton borderRadius={5} />
          <Skeleton borderRadius={5} />
          <Skeleton borderRadius={5} />
        </p>
        <p>
          <Skeleton borderRadius={5} />
          <Skeleton borderRadius={5} />
          <Skeleton borderRadius={5} />
        </p>
      </div>
    </div>
  );
}
