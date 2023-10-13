import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";

export function EquisComp({ onClick }) {
  return (
    <div className={css.root} onClick={onClick}>
      <CustomText variant="p">X</CustomText>
    </div>
  );
}
