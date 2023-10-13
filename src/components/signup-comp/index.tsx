import React from "react";
import css from "./styles.css";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { EmailField, TextField } from "ui/text-field";
import {
  useCreateUser,
  useGetUserToken,
  useSetUserLogged,
  useSetUserToken,
  useUserEmail,
} from "hooks";
import { useGoTo } from "hooks/uiHooks";

const SignupForm = () => {
  const createNewUser = useCreateUser();
  const userEmail = useUserEmail();
  const setLogedin = useSetUserLogged();
  let setUserToken = useSetUserToken();
  const goTo = useGoTo();

  const onceUserCreated = async (newUser) => {
    const userCreated = await createNewUser(newUser);
    if (userCreated) {
      let userToken = await useGetUserToken({
        email: userEmail,
        password: newUser.password,
      });
      await setUserToken(userToken.token);
      await setLogedin({ logged: true });
      goTo("/userdata");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passOne = e.target.contUno.value;
    const passTwo = e.target.contDos.value;
    const passEven = passOne === passTwo;

    const newUser = {
      fullname: "User",
      email: userEmail,
      password: passOne,
    };

    if (passEven) {
      onceUserCreated(newUser);
    } else alert("Las contrasenias deben ser iguales");
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <CustomText variant="p">Email</CustomText>
          <EmailField></EmailField>
        </label>
        <label>
          <CustomText variant="p">Contraseña</CustomText>
          <TextField type="password" name="contUno"></TextField>
        </label>
        <label>
          <CustomText variant="p">Repite la Contraseña</CustomText>
          <TextField type="password" name="contDos"></TextField>
        </label>
        <MainButton>Crear cuenta</MainButton>
      </form>
    </div>
  );
};

export { SignupForm };
