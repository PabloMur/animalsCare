import React from "react";
import { CustomText } from "ui/custom-text";
import { useGoTo } from "hooks/uiHooks";
import css from "./styles.css";
import { useDeletePet } from "hooks";
import { useSetRecoilState } from "recoil";
import {
  editPetIdAtom,
  editPetImageAtom,
  editPetLatitudeAtom,
  editPetLongitudeAtom,
  editPetNameAtom,
  editPetZoneAtom,
} from "atoms/userAtoms";

export const MyPetCardComp = ({
  nombre,
  zona,
  image,
  status,
  id,
  lat,
  lng,
}) => {
  const goTo = useGoTo();
  const eliminarMascota = useDeletePet();
  const editPetIdSetter = useSetRecoilState(editPetIdAtom);
  const editPetNameSetter = useSetRecoilState(editPetNameAtom);
  const editPetImageSetter = useSetRecoilState(editPetImageAtom);
  const editPetZoneSetter = useSetRecoilState(editPetZoneAtom);
  const editPetLatitudeSetter = useSetRecoilState(editPetLatitudeAtom);
  const editPetLongitudeSetter = useSetRecoilState(editPetLongitudeAtom);

  function eliminar() {
    eliminarMascota(id);
  }

  function editPet() {
    editPetIdSetter(id);
    editPetNameSetter(nombre);
    editPetImageSetter(image);
    editPetZoneSetter(zona);
    editPetLatitudeSetter(lat);
    editPetLongitudeSetter(lng);
    goTo("/edit-pet");
  }

  return (
    <div className={css.root}>
      <div className={css.imageContainer}>
        <img src={image} alt="pet image" />
      </div>
      <div className={css.petDataContainer}>
        <h4 className={css.cardTitle}>{nombre}</h4>
        <div className={css.zoneContainer}>
          <CustomText variant="p">Zona: {zona}</CustomText>
          <CustomText variant="p">Actualmente: {status}</CustomText>
        </div>
        <div>
          <button className={css.deletePet} onClick={eliminar}>
            <p className={css.buttonText}>Reportar como encontrada</p>
          </button>
        </div>
      </div>
    </div>
  );
};
