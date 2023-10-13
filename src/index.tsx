import React, { Suspense } from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { Loader } from "ui/loader";
import "../index.css";
import "./components/petCardCustomEl/index";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
