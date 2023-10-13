import { petOwnerEmail, sigthingPetNameAtom } from "atoms/userAtoms";
import { useGoTo } from "hooks/uiHooks";
import React from "react";
import { useSetRecoilState } from "recoil";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const PetCardComp = ({ nombre, zona, image, id, owner }) => {
  const sigthingPetNameSetter = useSetRecoilState(sigthingPetNameAtom);
  const petOwnerEmailSetter = useSetRecoilState(petOwnerEmail);
  const goTo = useGoTo();

  function handleClick() {
    sigthingPetNameSetter(nombre);
    petOwnerEmailSetter(owner);
    goTo("/sigthing");
  }

  return (
    <div className={css.root}>
      <div className={css.imageContainer}>
        <img src={image} alt="pet image" />
      </div>
      <div className={css.petDataContainer}>
        <h3>{nombre}</h3>
        <div className={css.zoneContainer}>
          <CustomText variant="p">Zona: {zona}</CustomText>
        </div>
        <button className={css.infoButton} onClick={handleClick}>
          <CustomText variant="p">Contactar al reportador</CustomText>
        </button>
      </div>
    </div>
  );
};

export { PetCardComp };
