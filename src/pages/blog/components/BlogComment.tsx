import React from "react";
import { useParams } from "react-router-dom";
import BlogCommentItem from "./BlogCommentItem";
import BlogCommentSkeleton from "../skeleton/BlogComment";
import useRequest from "../../../hooks/useRequest";
import { issue } from "../api/issue";
import { IIssueComment } from "../../../api/types/issueComment";

export default function BlogComment({ counts }: { counts: number }) {
  const { id } = useParams();
  const { data, loading } = useRequest({
    refetch: () => issue.getListComment(id || ""),
  });

  if (loading) {
    return <BlogCommentSkeleton />;
  }
  return (
    <div className="" id="comment">
      <h2 className="title title--h2">
        Comment{counts > 1 ? "s" : ""}{" "}
        <span className="color--light">({counts})</span>
      </h2>
      {data?.body.map((item: IIssueComment, index: number) => (
        <BlogCommentItem key={index} {...item} />
      ))}
    </div>
  );
}
