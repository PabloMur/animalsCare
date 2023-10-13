import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const popupPermissionCardState = atom({
  key: "popupPermissionCard", // unique ID (with respect to other atoms/selectors)
  default: {
    mostrado: false,
  },
});

export const desplegarMenuAtom = atom({
  key: "desplegarMenu", // unique ID (with respect to other atoms/selectors)
  default: false,
});

export const loaderAtom = atom({
  key: "activarDesactivarLoader",
  default: {
    mostrado: false,
  },
});

export const routeAtom = atom({
  key: "selectedRoute",
  default: "/",
  effects_UNSTABLE: [persistAtom],
});
