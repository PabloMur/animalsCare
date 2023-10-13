import React from "react";
import { PetEditor } from "components/pet-editor/index";
import { Loader } from "ui/loader";

const EditPetPage = () => {
  return (
    <>
      <PetEditor></PetEditor>
      <Loader></Loader>
    </>
  );
};

export { EditPetPage };
