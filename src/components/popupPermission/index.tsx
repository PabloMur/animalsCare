import React, { useEffect } from "react";
import { CustomButton, MainButton } from "ui/buttons";
import css from "./styles.css";
import { popupPermissionCardState } from "atoms/uiAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EquisComp } from "ui/equis";
import { CustomText } from "ui/custom-text";
import { useUserPosition, useUserLocation } from "hooks";
import { useGoTo } from "hooks/uiHooks";

const NonComp = () => {
  return <div className={css.none}></div>;
};

const PopupCartel = () => {
  const setPopupAtom = useSetRecoilState(popupPermissionCardState);
  const position = useUserPosition();
  const userLocation = useUserLocation();
  const goTo = useGoTo();

  // useEffect(() => {
  //   if (userLocation.lat !== 0 && userLocation.lng !== 0) goTo("/mapbox");
  // }, []);
  function cerrarPopUp() {
    setPopupAtom({ mostrado: false });
  }

  function aceptarUsoDePosicion() {
    position();
    setPopupAtom({ mostrado: false });
    if (userLocation.lat !== 0 && userLocation.lng !== 0) goTo("/mapbox");
  }

  return (
    <div className={css.root}>
      <div className={css.cartel}>
        <div className={css.cartelEquisContainer}>
          <EquisComp onClick={cerrarPopUp}></EquisComp>
        </div>
        <div className={css.textAndButtonContainer}>
          <div className={css.textContainer}>
            <CustomText variant="p">
              Para continuar necesitamos que nos des tu consentimiento para
              obtener tu ubicacion
            </CustomText>
          </div>

          <CustomButton onClick={aceptarUsoDePosicion}>
            Aceptar y continuar
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const PopupPermissionBanner = () => {
  const [value, setValue] = useRecoilState(popupPermissionCardState);
  return (
    <div>
      {value.mostrado ? <PopupCartel></PopupCartel> : <NonComp></NonComp>}
    </div>
  );
};

export { PopupPermissionBanner };
