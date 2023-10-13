import React from "react";
import css from "./styles.css";
import { PataLogo } from "../assets/pata";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      <div className={css.root}>
        <PataLogo></PataLogo>
        <h3 className={css.appName}>AnimalsCare</h3>
      </div>
    </Link>
  );
};

export { Logo };
