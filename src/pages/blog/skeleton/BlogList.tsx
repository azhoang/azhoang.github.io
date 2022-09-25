import React from "react";
import BlogItem from "../skeleton/BlogItem";

export default function BlogList(props: { length?: number }) {
  const ListItem = React.useMemo(() => {
    return (
      <div className="news-grid section">
        {Array(props.length || 6)
          .fill({})
          .map((_, index: number) => (
            <BlogItem key={index} />
          ))}
      </div>
    );
  }, [props.length]);
  return <>{ListItem}</>;
}
