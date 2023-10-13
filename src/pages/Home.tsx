import React from "react";
import { Banner } from "components/banner";
import { PopupPermissionBanner } from "components/popupPermission";

function Home() {
  return (
    <>
      <Banner />
      <PopupPermissionBanner></PopupPermissionBanner>
    </>
  );
}

export { Home };
