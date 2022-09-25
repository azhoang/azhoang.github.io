import React from "react";
import PerfectScroll from "react-perfect-scrollbar";
import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <PerfectScroll className="content">
      <Outlet />
    </PerfectScroll>
  );
}
