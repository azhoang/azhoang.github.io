import React from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../../hooks/useRequest";
import BlogContentSkeleton from "../skeleton/BlogContent";
import { issue } from "../api/issue";
import Markdown from "../../../components/Markdown";
import BlogComment from "./BlogComment";
import BlogCommentForm from "./BlogCommentForm";
import BlogReaction from "./BlogReaction";
import NothingHere from "../../../components/NothingHere";

export default function BlogContent() {
  const { id } = useParams();
  const originTitle = React.useRef<string>(document.title);
  const { data, loading } = useRequest({
    refetch: () => issue.getIssue(id || ""),
  });

  React.useEffect(() => {
    if (data?.title) document.title = data?.title;
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document.title = originTitle.current;
    };
  }, [data?.title]);

  if (loading) {
    return <BlogContentSkeleton />;
  }
  if (!loading && !data) return <NothingHere />;
  return (
    <div className="pb-3">
      <header className="header-post">
        <h1 className="title title--h1">{data?.title}</h1>
        <div className="caption-post">
          <p>{data?.description}</p>
        </div>
        <div className="header-post__image-wrap">
          <img
            className="cover lazyload"
            src={data?.mainImage}
            alt={data?.title}
          />
        </div>
      </header>
      <Markdown>{data?.body.replace(/<!--(.*)-->/gm, "")}</Markdown>
      <BlogReaction id={data?.id} reactions={data?.reactions} />
      <footer className="footer-post" />

      <BlogComment counts={data?.comments} />
      <a
        href={`${data?.html_url}#new_comment_field`}
        target="_blank"
        rel="noreferrer"
      >
        <BlogCommentForm />
      </a>
    </div>
  );
}
