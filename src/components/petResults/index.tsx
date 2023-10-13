import { petsAround, petsAroundLength } from "atoms/userAtoms";
import { useGoTo } from "hooks/uiHooks";
import React from "react";
import { useRecoilValue } from "recoil";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const PetResults = () => {
  const petResults = useRecoilValue(petsAround);
  const goTo = useGoTo();

  function handleClick() {
    goTo("/pets-around");
  }

  return (
    <div className={css.container}>
      <div>
        <CustomText variant="p">Mascotas Cerca: {petResults.length}</CustomText>
      </div>
      <button className={css.button} onClick={handleClick}>
        <CustomText variant="p">Ver Resultados</CustomText>
      </button>
    </div>
  );
};

export { PetResults };
