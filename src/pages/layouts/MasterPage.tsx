import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function MasterPage() {
  return (
    <main className="main">
      {/* Menu */}
      <Header />
      <div className="wrapper sticky-parent">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <Content />
        {/* Content End */}
      </div>
      {/* Wrapper End */}
    </main>
  );
}
