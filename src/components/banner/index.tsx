import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { CustomButton } from "ui/buttons";
import { popupPermissionCardState } from "atoms/uiAtoms";
import { useSetRecoilState } from "recoil";

const Banner = () => {
  const setValue = useSetRecoilState(popupPermissionCardState);
  const MostrarPopup = () => {
    setValue({ mostrado: true });
  };

  return (
    <div className={css.root}>
      <div className={css.text}>
        <CustomText variant="title">Reporta un animal abandonado</CustomText>
        <div className={css.pcontainer}>
          <CustomText variant="paraph">
            Con esta app vas a poder ayudar a mascotas a reencontrarse con su
            familia o asistir a un animal abandonado echa un vistazo!
          </CustomText>
        </div>
        <CustomButton onClick={MostrarPopup}>Buscar Animales</CustomButton>
      </div>
      <div className={css.bannerImage}></div>
    </div>
  );
};

export { Banner };
