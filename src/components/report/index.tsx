import React from "react";
import css from "./styles.css";
import { ReportNameField, TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { MapboxPetsAround, MapboxReport } from "components/mapbox";
import { ReportButton } from "ui/buttons";
import { DropzoneComp } from "components/dropzone";
import {
  reportPetCordsLat,
  reportPetCordsLng,
  reportPetName,
} from "atoms/userAtoms";
import { useRecoilValue } from "recoil";
import {
  useGetPetZone,
  useGetterImageDataURL,
  useReportNewPet,
  useUserEmail,
} from "hooks";

const ReportMaker = () => {
  const createPetFunction = useReportNewPet();
  const userEmail = useUserEmail();
  const petname = useRecoilValue(reportPetName);
  const imageDataUrl = useGetterImageDataURL();
  const petZone = useGetPetZone();
  const petLat = useRecoilValue(reportPetCordsLat);
  const petLng = useRecoilValue(reportPetCordsLng);

  let mascota = {
    fullname: petname,
    ownerEmail: userEmail,
    zone: petZone,
    lat: petLat,
    lng: petLng,
    state: "perdido",
    image: imageDataUrl,
  };
  function onSubmit(e) {
    e.preventDefault();
    createPetFunction(mascota);
    console.log(mascota);
  }

  function Mostrar() {
    console.log("mostrar algo");
  }

  return (
    <div className={css.root}>
      <CustomText variant="title">Reportar Mascota</CustomText>
      <form className={css.form} onSubmit={onSubmit}>
        <label className={css.label}>
          <CustomText variant="p">El nombre de tu mascota</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Imagen de tu mascota</CustomText>
          <DropzoneComp></DropzoneComp>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Zona en la que se perdio</CustomText>
          <div>
            <MapboxReport></MapboxReport>
          </div>
        </label>
        <ReportButton variant="makeReport" onClick={Mostrar}></ReportButton>
        <ReportButton variant="cancelReport" onClick={Mostrar}></ReportButton>
      </form>
    </div>
  );
};

export { ReportMaker };
