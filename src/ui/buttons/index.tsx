import React from "react";
import css from "./index.css";
import { Link } from "react-router-dom";
import { CustomText } from "ui/custom-text";
import { useUserLogged } from "hooks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { routeAtom } from "atoms/uiAtoms";

const MainButton = ({ children }) => {
  return <button className={css.MainButton}>{children}</button>;
};

const CustomButton = ({ children, onClick }) => {
  return (
    <button className={css.customButton} onClick={onClick}>
      {children}
    </button>
  );
};

export const ReportButton = ({ onClick, variant }) => {
  const MakeReportButton = () => {
    return (
      <button onClick={onClick} className={css.makeReport}>
        <CustomText variant="p">Reportar Mascota</CustomText>
      </button>
    );
  };

  const CancelReport = () => {
    function reload() {
      location.reload();
    }
    return (
      <button className={css.cancelReport} onClick={reload}>
        <CustomText variant="p">Cancelar Reporte</CustomText>
      </button>
    );
  };

  return variant == "makeReport" ? <MakeReportButton /> : <CancelReport />;
};

export const LoginButton = ({ children, route }) => {
  const userLogged = useUserLogged();
  return (
    <>
      {userLogged === false && (
        <Link className={css.linkLogin} to={route}>
          <button className={css.login}>
            <CustomText variant="p">{children}</CustomText>
          </button>
        </Link>
      )}
    </>
  );
};

export const LogoutButton = ({ onClick }) => {
  const userLogged = useUserLogged();
  return (
    <>
      {userLogged && (
        <Link className={css.linkLogin} to="/">
          <button className={css.logout} onClick={onClick}>
            <CustomText variant="p">Salir</CustomText>
          </button>
        </Link>
      )}
    </>
  );
};

export const SignupButton = ({ children, route }) => {
  const userLogged = useUserLogged();
  return (
    <>
      {userLogged === false && (
        <button className={css.signup}>
          <Link className={css.link} to={route}>
            <CustomText variant="p">{children}</CustomText>
          </Link>
        </button>
      )}
    </>
  );
};

const MenuButton = ({ children, route }) => {
  const logged = useUserLogged();

  const GoToLoginComp = () => {
    const setRoute = useSetRecoilState(routeAtom);
    return (
      <button
        className={css.root}
        onClick={() => {
          setRoute(route);
          console.log(useRecoilValue(routeAtom));
        }}
      >
        <Link className={css.link} to="/login">
          {children}
        </Link>
      </button>
    );
  };

  const MenuButtonAction = () => {
    return (
      <button className={css.root}>
        <Link className={css.link} to={route}>
          {children}
        </Link>
      </button>
    );
  };

  return logged ? <MenuButtonAction /> : <GoToLoginComp />;
};

const LocationPermissionButton = () => {
  return <button>Aceptar y continuar!</button>;
};

export { MenuButton, CustomButton, LocationPermissionButton, MainButton };
