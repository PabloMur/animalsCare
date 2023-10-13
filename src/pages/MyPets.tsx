import React from "react";
import { MyPetsContainer } from "components/my-pets/index";
import { Loader } from "ui/loader";

export const MyPetsPage = () => {
  return (
    <div>
      <MyPetsContainer></MyPetsContainer>
      <Loader />
    </div>
  );
};
