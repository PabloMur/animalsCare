import React, { useEffect } from "react";
import css from "./styles.css";
import { ContainerComponent } from "ui/container";
import { CustomText } from "ui/custom-text";
import { petsAround } from "atoms/userAtoms";
import { useRecoilValue } from "recoil";
import { PetCardComp } from "components/pet-card";
import { useGoTo } from "hooks/uiHooks";

const PetsAround = () => {
  const petsResults = useRecoilValue(petsAround);
  const goTo = useGoTo();

  console.log(petsResults);

  function handleClick() {
    goTo("/mapbox");
  }

  function PetList() {
    const petsList = petsResults;

    return (
      petsList && (
        <ul className={css.ul}>
          {petsList.map((pet) => (
            <li key={pet.fullname} className={css.li}>
              <PetCardComp
                nombre={pet.fullname}
                zona={pet.zone}
                image={pet.image}
                id={pet.objectID}
                owner={pet.ownerEmail}
              ></PetCardComp>
            </li>
          ))}
        </ul>
      )
    );
  }

  return (
    <div className={css.root}>
      <CustomText variant="title">Animales Cerca</CustomText>
      <div className={css.petContainer}>
        <PetList />
      </div>
      <button className={css.backButton} onClick={handleClick}>
        <CustomText variant="p">Volver al mapa</CustomText>
      </button>
    </div>
  );
};

export { PetsAround };
