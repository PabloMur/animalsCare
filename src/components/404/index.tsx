import React from "react";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const CuatrocientosComp = () => {
  return (
    <div className={css.root}>
      <CustomText variant="title">404 Recurso no encontrado...</CustomText>
      <iframe
        className={css.gif}
        src="https://giphy.com/embed/Kzt27lufBaNoLm1vQY"
        width="280"
        height="280"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export { CuatrocientosComp };
