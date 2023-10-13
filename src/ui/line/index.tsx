import React from "react";
import css from "./styles.css";

const Line = () => {
  return <div className={css.line}></div>;
};

export const LeftLine = () => {
  return <div className={css.leftLine}></div>;
};

export const RightLine = () => {
  return <div className={css.rightLine}></div>;
};

export { Line };
