import React from "react";
import css from "./styles.css";

const CustomTitle = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};

const CustomParaph = ({ children }) => {
  return <p className={css.p}>{children}</p>;
};

const CustomText = ({ children, variant }) => {
  return (
    <div className={css.container}>
      {variant === "title" ? (
        <CustomTitle>{children}</CustomTitle>
      ) : (
        <CustomParaph>{children}</CustomParaph>
      )}
    </div>
  );
};

export { CustomText };
