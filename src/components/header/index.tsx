import React, { useState } from "react";
import css from "./styles.css";
import { Logo } from "ui/logo";
import { Menu, MenuDesplegable } from "ui/menu";
import { BurgerButton } from "ui/burger-button";

const Header = () => {
  return (
    <header className={css.root}>
      <div className={css.container}>
        <Logo />
        <Menu />
        <MenuDesplegable />
        <BurgerButton />
      </div>
    </header>
  );
};

export { Header };
