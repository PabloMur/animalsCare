import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { useCheckUserEmail, useSetUserEmail } from "hooks";
import { useNavigate } from "react-router-dom";
import { useLoader } from "hooks/uiHooks";

const LoginForm = () => {
  const goTo = useNavigate();
  const seterLoaderState = useLoader();
  const setUserEmail = useSetUserEmail();

  const checkEmailFromField = async (e) => {
    e.preventDefault();
    const inputValue = e.target.email.value;
    seterLoaderState({ mostrado: true });
    const check = await useCheckUserEmail(inputValue);
    setUserEmail(inputValue);
    seterLoaderState({ mostrado: false });
    check ? goTo("/password") : goTo("/signup");
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={checkEmailFromField}>
        <label>
          <CustomText variant="p">Ingresa Tu Email:</CustomText>
          <TextField type="text" name="email"></TextField>
          <MainButton>Comenzar</MainButton>
        </label>
      </form>
    </div>
  );
};

export { LoginForm };
