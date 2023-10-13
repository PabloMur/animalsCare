import React from "react";
import { LoginForm } from "components/login-comp";
import { Loader } from "ui/loader";

const LoginPage = () => {
  return (
    <>
      <LoginForm></LoginForm>
      <Loader />
    </>
  );
};

export { LoginPage };
