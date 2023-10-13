import React from "react";
import css from "./styles.css";
import { loaderAtom } from "atoms/uiAtoms";
import { useRecoilValue } from "recoil";
import { CustomText } from "ui/custom-text";

export function Loader() {
  let loaderState = useRecoilValue(loaderAtom);

  return (
    <>
      {loaderState.mostrado && (
        <div className={css.root}>
          <h3 className={css.texto}>Cargando...</h3>
          <iframe
            src="https://giphy.com/embed/VIfKkSJDf4yroE6QcR"
            width="60px"
            height="60px"
            className={css.iframe}
          />
        </div>
      )}
    </>
  );
}
