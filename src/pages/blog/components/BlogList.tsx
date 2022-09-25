import React from "react";
import BlogItem from "./BlogItem";
import BlogListSkeleton from "../skeleton/BlogList";
import useRequest from "../../../hooks/useRequest";
import { issue } from "../api/issue";
import NothingHere from "../../../components/NothingHere";

export default function BlogList() {
  const { data, loading } = useRequest({
    refetch: () => issue.getListIssue(),
  });

  if (loading) {
    return <BlogListSkeleton />;
  }

  if (!data?.body.length) {
    return <NothingHere />;
  }

  return (
    <div className="news-grid section">
      {data?.body.map((item: any) => (
        <BlogItem
          createdAt={item.created_at}
          description={item.description}
          link={`/blog/${item.number}`}
          title={item.title}
          updatedAt={item.updated_at}
          image={item.mainImage}
          key={item.node_id}
        />
      ))}
    </div>
  );
}
