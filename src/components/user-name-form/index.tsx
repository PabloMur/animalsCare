import React from "react";
import { NameTextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { useUserName, useUpdateNameFunction } from "hooks";

const UserNameForm = () => {
  let userName = useUserName();
  let updateName = useUpdateNameFunction();

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateName(e);
  };

  return (
    <form className={css.root} onSubmit={handleSubmit}>
      <CustomText variant="p">Nombre</CustomText>
      <NameTextField name="username" placeholder={userName}></NameTextField>
      <MainButton>Guardar Nombre</MainButton>
    </form>
  );
};

export { UserNameForm };
