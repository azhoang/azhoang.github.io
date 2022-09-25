import React from "react";
import Skeleton from "react-loading-skeleton";

export default function BlogComment() {
  return (
    <div id="comment">
      {Array(4)
        .fill({})
        .map((_, index: number) => (
          <div className="comment-box" key={index}>
            <div className="comment-box__inner">
              <Skeleton width={84} height={84} className="avatar avatar--60" />
              <div className="comment-box__body">
                <h4 className="comment-box__details">
                  <span>
                    <Skeleton width={150} />
                  </span>
                  <span className="comment-box__details-date">
                    <Skeleton width={85} />
                  </span>
                </h4>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <ul className="comment-box__footer">
                  <Skeleton />
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
