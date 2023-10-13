import React from "react";
import { SignupForm } from "components/signup-comp";
import { Loader } from "ui/loader";

const SignupPage = () => {
  return (
    <>
      <SignupForm></SignupForm>
      <Loader />
    </>
  );
};

export { SignupPage };
