import React, { useState } from "react";
import css from "./index.css";
import { Line, LeftLine, RightLine } from "ui/line";
import { useRecoilState } from "recoil";
import { desplegarMenuAtom } from "atoms/uiAtoms";

const Cross = () => {
  return (
    <div className={css.crosslineContainer}>
      <LeftLine></LeftLine>
      <RightLine></RightLine>
    </div>
  );
};

const Triline = () => {
  return (
    <div className={css.trilineContainer}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </div>
  );
};

export const CustomButton = ({ handleclick, children }) => {
  return (
    <button className={css.customButton} onClick={handleclick}>
      {children}
    </button>
  );
};

const BurgerButton = () => {
  const [clicked, setClicked] = useState(false);
  const [value, setter] = useRecoilState(desplegarMenuAtom);

  function handleClick() {
    setClicked(!clicked);
    value ? setter(false) : setter(true);
  }

  return (
    <div onClick={handleClick} className={css.root}>
      {clicked ? <Cross /> : <Triline />}
    </div>
  );
};

export { BurgerButton };
