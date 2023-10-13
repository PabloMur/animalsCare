import React from "react";
import css from "./styles.css";
import { ReportNameField } from "ui/text-field";
import { CustomText } from "ui/custom-text";
import { MapboxReport } from "components/mapbox";
import { ReportButton } from "ui/buttons";
import { DropzoneComp } from "components/dropzone";

const ReportMaker = () => {
  function onSubmit(e) {}

  function Mostrar() {
    console.log("mostrar algo");
  }

  return (
    <div className={css.root}>
      <CustomText variant="title">Reportar Mascota Abandonada</CustomText>
      <form className={css.form} onSubmit={onSubmit}>
        <label className={css.label}>
          <CustomText variant="p">Nombre del animal</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Raza</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Especie animal</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Comportamiento</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Detalle de comportamiento</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Vacunas</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Dosis</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Fecha de aplicacion</CustomText>
          <input type="date" className={css.inputDate} />
        </label>
        <label className={css.label}>
          <CustomText variant="p">Emfermedades</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Detalle de emfermedad</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Nombre de sintoma</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Detalle del sintoma</CustomText>
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

        <ReportButton variant="cancelReport" onClick={Mostrar}></ReportButton>
        <ReportButton variant="makeReport" onClick={Mostrar}></ReportButton>
      </form>
    </div>
  );
};

export { ReportMaker };
