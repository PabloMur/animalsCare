import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { EditNameField } from "ui/text-field";
import { DropzoneEditComp } from "components/dropzone";
import { MapboxEdit } from "components/mapbox";
import { useRecoilValue } from "recoil";
import {
  editPetIdAtom,
  editPetImageAtom,
  editPetLatitudeAtom,
  editPetLongitudeAtom,
  editPetNameAtom,
  editPetZoneAtom,
} from "atoms/userAtoms";
import { useEditPet, useUserEmail } from "hooks";

function PetEditor() {
  const ediPetFunction = useEditPet();

  const petName = useRecoilValue(editPetNameAtom);
  const petZone = useRecoilValue(editPetZoneAtom);
  const petStatus = "perdido";
  const petEditImage = useRecoilValue(editPetImageAtom);
  const petLatitude = useRecoilValue(editPetLatitudeAtom);
  const petLongitude = useRecoilValue(editPetLongitudeAtom);
  const userEmail = useUserEmail();

  const editPetData = {
    fullname: petName,
    ownerEmail: userEmail,
    zone: petZone,
    lat: petLatitude,
    lng: petLongitude,
    state: petStatus,
    image: petEditImage,
  };

  function handleSubmit(e) {
    e.preventDefault();
    ediPetFunction(editPetData);
  }

  function resetForm() {
    location.reload();
  }

  return (
    <div className={css.container}>
      <CustomText variant="title">Editar Mascota</CustomText>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="petname">
          <CustomText variant="p">Nuevo Nombre de tu Mascota:</CustomText>
          <EditNameField></EditNameField>
        </label>
        <label htmlFor="">
          <CustomText variant="p">Nueva imagen de tu mascota:</CustomText>
          <DropzoneEditComp></DropzoneEditComp>
        </label>
        <label htmlFor="">
          <CustomText variant="p">Nueva ubicacion de tu Mascota:</CustomText>
          <MapboxEdit></MapboxEdit>
        </label>

        <button>Actualizar Datos de Mascota</button>
        <button onClick={resetForm}>Cancelar edicion</button>
      </form>
    </div>
  );
}

export { PetEditor };
