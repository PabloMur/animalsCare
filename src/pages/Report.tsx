import React from "react";
import { ReportMaker } from "components/report";
import { Loader } from "ui/loader";

const ReportPage = () => {
  return (
    <div>
      <ReportMaker></ReportMaker>
      <Loader />
    </div>
  );
};

export { ReportPage };
