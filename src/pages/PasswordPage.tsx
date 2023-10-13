import React from "react";
import { PasswordFormComp } from "components/password";
import { Loader } from "ui/loader";

const PasswordPage = () => {
  return (
    <div>
      <PasswordFormComp></PasswordFormComp>
      <Loader />
    </div>
  );
};

export { PasswordPage };
