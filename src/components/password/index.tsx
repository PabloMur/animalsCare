import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { useGetUserToken, useSetUserToken, useUserEmail } from "hooks";
import { useLoader } from "hooks/uiHooks";
import { useGoTo } from "hooks/uiHooks";
import { useSetUserLogged } from "hooks";

const PasswordFormComp = () => {
  let seterLoaderState = useLoader();
  let goTo = useGoTo();
  let setLogedin = useSetUserLogged();
  let userEmail = useUserEmail();
  let setUserToken = useSetUserToken();
  let logerActive = { mostrado: true };
  let logerDeactive = { mostrado: false };
  let userToken;

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterLoaderState(logerActive);
    userToken = await useGetUserToken({
      email: userEmail,
      password: e.target.password.value,
    });

    if (userToken.error) {
      alert("Contraseña incorrecta, vuelve a intentarlo");
      seterLoaderState(logerDeactive);
      goTo("/password");
    }

    if (userToken && !userToken.error) {
      seterLoaderState(logerDeactive);
      setLogedin({ logged: true });
      setUserToken(userToken.token);
      goTo("/");
    }
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <CustomText variant="">Ingresa tu contraseña</CustomText>
          <TextField type="password" name="password"></TextField>
          <MainButton>Ingresar</MainButton>
        </label>
      </form>
    </div>
  );
};

export { PasswordFormComp };
