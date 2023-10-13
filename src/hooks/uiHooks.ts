import { desplegarMenuAtom, loaderAtom, routeAtom } from "atoms/uiAtoms";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

export function desplegarMenu() {
  const menuDesplegableSetter = useSetRecoilState(desplegarMenuAtom);
  return menuDesplegableSetter;
}

export function useSetRoute() {
  const setRouteValue = useSetRecoilState(routeAtom);
  return setRouteValue;
}

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};

export const useLoader = () => {
  const setValue = useSetRecoilState(loaderAtom);
  localStorage.setItem("loader", "test");
  return setValue;
};
