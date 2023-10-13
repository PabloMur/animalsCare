import React from "react";
import { PetsAround } from "components/pets-around";
import { Loader } from "ui/loader";

const PetAroundPage = () => {
  return (
    <>
      <PetsAround></PetsAround>
      <Loader />
    </>
  );
};

export { PetAroundPage };
