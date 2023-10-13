import { SigthingComp } from "components/sigthingComp";
import React from "react";
import { Loader } from "ui/loader";

const Sigthing = () => {
  return (
    <div>
      <SigthingComp></SigthingComp>
      <Loader />
    </div>
  );
};

export { Sigthing };
