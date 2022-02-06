import React from "react";
import Header from "../components/Header/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}
