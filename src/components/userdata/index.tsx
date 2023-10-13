import React, { useEffect } from "react";
import css from "./styles.css";
import { UserNameForm } from "components/user-name-form";
import { UserPasswordForm } from "components/user-password-form";
import { CustomText } from "ui/custom-text";
import { useGetMeName, useUserToken } from "hooks";

const UserData = () => {
  let getName = useGetMeName();
  let token = useUserToken();

  useEffect(() => {
    getName(token);
  }, []);

  return (
    <div className={css.root}>
      <CustomText variant="title">Mis Datos</CustomText>
      <UserNameForm />
      <UserPasswordForm />
    </div>
  );
};

export { UserData };
