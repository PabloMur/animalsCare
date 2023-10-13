import React from "react";
import css from "./layout.css";
import { Outlet } from "react-router-dom";
import { Header } from "components/header";
import { Footer } from "components/footer";

function Layout() {
  return (
    <div className={css.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export { Layout };
