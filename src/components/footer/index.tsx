import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";

const Footer = () => {
  return (
    <footer className={css.root}>
      <div className={css.container}>
        <div className={css.find}>
          <CustomText variant="p">Dónde Contactarme:</CustomText>
          <ul>
            <a href="https://github.com/PabloMur" target="_blank">
              <div className={css.githubimg}></div>
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-nicol%C3%A1s-murillo-57034b189/"
              target="_blank"
            >
              <div className={css.linkedinimg}></div>
            </a>
          </ul>
        </div>
        <div className={css.learn}>
          <CustomText variant="p">Dónde Estudié:</CustomText>
          <a href="https://www.apx.school" target="_blank">
            <div className={css.apximg}></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
