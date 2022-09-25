import classNames from "classnames";
import React from "react";
import { IIssueComment } from "../../../api/types/issueComment";
import Markdown from "../../../components/Markdown";
import dayjs from "../../../hooks/dayjs";
import BlogReaction from "./BlogReaction";

export default function BlogCommentItem(props: IIssueComment) {
  return (
    <div className="comment-box">
      <div className="comment-box__inner">
        <svg className="avatar avatar--60" viewBox="0 0 84 84">
          <g className="avatar__hexagon">
            <image
              xlinkHref={props.user.avatar_url}
              height="100%"
              width="100%"
            />
          </g>
        </svg>
        <div className="comment-box__body">
          <h4
            className={classNames("comment-box__details", {
              "text-danger": props.author_association === "OWNER",
            })}
          >
            <span>{props.user.login}</span>
            <span className="comment-box__details-date">
              {dayjs().from(dayjs(props.updated_at), true)}
            </span>
          </h4>
          <Markdown>{props.body}</Markdown>
          <ul className="comment-box__footer">
            <BlogReaction id={props.id} reactions={props.reactions} />
            {/* <li>
              <i className="font-icon fa-solid fa-reply fa-fw" />{" "}
              <span>Reply</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
