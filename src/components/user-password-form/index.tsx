import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { CustomText } from "ui/custom-text";
import { MainButton } from "ui/buttons";
import { useUpdatePasswordFunction } from "hooks";

const UserPasswordForm = () => {
  const updatePassword = useUpdatePasswordFunction();

  const handleSubmit = (e) => {
    e.preventDefault();
    const passUno = e.target.contUno.value;
    const passDos = e.target.contDos.value;
    if (passUno == passDos) updatePassword(passUno);
    else alert("las contraseñas deben ser iguales");
  };

  return (
    <div>
      <form className={css.root} onSubmit={handleSubmit}>
        <label htmlFor="">
          <CustomText variant="p">Nueva Contraseña</CustomText>
          <TextField type="password" name="contUno"></TextField>
        </label>
        <label htmlFor="">
          <CustomText variant="p">Repite Contraseña</CustomText>
          <TextField type="password" name="contDos"></TextField>
        </label>
        <MainButton>Modificar Contraseña</MainButton>
      </form>
    </div>
  );
};

export { UserPasswordForm };
