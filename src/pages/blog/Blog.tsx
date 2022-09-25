import React from "react";
import BlogList from "./components/BlogList";

export default function Blog() {
  return (
    <>
      <div className="section mt-0">
        <h1 className="title title--h1 title__separate">Blog</h1>
      </div>
      {/* News */}
      <BlogList />
    </>
  );
}
